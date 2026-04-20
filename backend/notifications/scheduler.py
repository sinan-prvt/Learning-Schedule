import time
import threading
import json
from datetime import datetime, time as dt_time
from django.utils import timezone
from django.conf import settings
from pywebpush import webpush, WebPushException

def start_scheduler():
    """Starts the background thread if it's not already running."""
    # Ensure it only runs once (especially with Django Reloading)
    import os
    if os.environ.get('RUN_MAIN') != 'true':
        return

    thread = threading.Thread(target=_notification_worker, daemon=True)
    print("Starting Automatic Notification Scheduler...")
    thread.start()

def _notification_worker():
    """Infinite loop that checks the schedule every 30 seconds."""
    from .models import GlobalPreference, PushSubscription
    from tasks.models import Day

    while True:
        try:
            now = timezone.localtime()
            today = now.date()
            current_time = now.time()
            
            print(f"Check @ {current_time} | Today: {today}")
            
            pref = GlobalPreference.objects.first()
            if pref and pref.is_enabled and pref.curriculum_start_date:
                # 1. Check if we haven't sent a notification today
                # 2. Check if the current time is past the reminder time
                if (pref.last_sent_date != today) and (current_time >= pref.daily_reminder_time):
                    
                    # Logic to find the current day
                    start_date = pref.curriculum_start_date
                    if today >= start_date:
                        day_num = (today - start_date).days + 1
                        all_days = Day.objects.all().order_by('week__week_id', 'day_number')
                        
                        if day_num <= all_days.count():
                            current_day = all_days[day_num - 1]
                            next_session = current_day.sessions.filter(is_completed=False).first()
                            
                            if not next_session:
                                message = f"Day {day_num}: {current_day.topic} is complete! Check back tomorrow."
                            else:
                                message = f"Time to study! Day {day_num} - {current_day.topic}: '{next_session.title}'"

                            # Send to all subscribers
                            subscriptions = PushSubscription.objects.all()
                            for sub in subscriptions:
                                try:
                                    webpush(
                                        subscription_info={
                                            "endpoint": sub.endpoint,
                                            "keys": {"p256dh": sub.p256dh, "auth": sub.auth}
                                        },
                                        data=json.dumps({"title": "Study Reminder 📚", "body": message}),
                                        vapid_private_key=settings.VAPID_PRIVATE_KEY,
                                        vapid_claims={"sub": f"mailto:{settings.VAPID_ADMIN_EMAIL}"}
                                    )
                                except WebPushException:
                                    pass # Cleanup old/invalid subs would happen here
                            
                            # Mark as sent for today
                            pref.last_sent_date = today
                            pref.save()
                            print(f"Auto-notification sent for Day {day_num}")
            
        except Exception as e:
            print(f"Scheduler Error: {e}")
        
        # Check every 30 seconds
        time.sleep(30)
