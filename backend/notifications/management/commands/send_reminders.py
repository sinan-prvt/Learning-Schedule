import json
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.conf import settings
from notifications.models import PushSubscription, GlobalPreference
from tasks.models import Day, Session
from pywebpush import webpush, WebPushException

class Command(BaseCommand):
    help = 'Sends daily study reminders based on the scheduled start date.'

    def handle(self, *args, **options):
        pref = GlobalPreference.objects.first()
        if not pref or not pref.is_enabled or not pref.curriculum_start_date:
            self.stdout.write(self.style.WARNING("Scheduling not enabled or start date not set."))
            return

        today = timezone.now().date()
        start_date = pref.curriculum_start_date
        
        if today < start_date:
            self.stdout.write(self.style.INFO(f"Learning hasn't started yet. Starts on {start_date}."))
            return

        # Calculate current day number (1-indexed)
        # Note: This assumes consecutive days. 
        day_num = (today - start_date).days + 1
        
        # Get all days in order (Week 1 Day 1, Week 1 Day 2, ..., Week 2 Day 1, etc.)
        all_days = Day.objects.all().order_by('week__week_id', 'day_number')
        
        if day_num > all_days.count():
            self.stdout.write(self.style.SUCCESS("Curriculum completed! No more reminders needed."))
            return

        current_day = all_days[day_num - 1]
        
        # Find next uncompleted session
        next_session = current_day.sessions.filter(is_completed=False).first()
        if not next_session:
            # If all sessions done, maybe remind about the day being finished or just pick the first?
            message = f"You've completed Day {day_num}: {current_day.topic}! Keep it up."
        else:
            message = f"Day {day_num} - {current_day.topic}: It's time for '{next_session.title}' at {next_session.time}."

        # Send push to all subscriptions
        subscriptions = PushSubscription.objects.all()
        sent = 0
        failed = 0
        
        for sub in subscriptions:
            try:
                webpush(
                    subscription_info={
                        "endpoint": sub.endpoint,
                        "keys": {"p256dh": sub.p256dh, "auth": sub.auth}
                    },
                    data=json.dumps({
                        "title": "Your Study Reminder 📚",
                        "body": message
                    }),
                    vapid_private_key=settings.VAPID_PRIVATE_KEY,
                    vapid_claims={"sub": f"mailto:{settings.VAPID_ADMIN_EMAIL}"}
                )
                sent += 1
            except WebPushException as ex:
                failed += 1
                self.stdout.write(self.style.ERROR(f"Failed to send to {sub.endpoint[:30]}: {ex}"))

        self.stdout.write(self.style.SUCCESS(f"Sent {sent} notifications, {failed} failed."))
