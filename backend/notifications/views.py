import json
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PushSubscription, GlobalPreference
from pywebpush import webpush, WebPushException

class SaveSubscriptionView(APIView):
    """Save the browser's push subscription to the database."""
    def post(self, request):
        data = request.data
        endpoint = data.get('endpoint')
        p256dh = data.get('keys', {}).get('p256dh')
        auth = data.get('keys', {}).get('auth')

        if not all([endpoint, p256dh, auth]):
            return Response({'error': 'Invalid subscription data'}, status=400)

        sub, created = PushSubscription.objects.get_or_create(
            endpoint=endpoint,
            defaults={'p256dh': p256dh, 'auth': auth}
        )
        return Response({'status': 'subscribed', 'created': created})


class SendTestNotificationView(APIView):
    """Sends a test push notification to all saved subscriptions."""
    def post(self, request):
        subscriptions = PushSubscription.objects.all()
        message = request.data.get('message', 'Time to study! 📚 Your next session is ready.')
        
        failed = 0
        sent = 0
        for sub in subscriptions:
            try:
                webpush(
                    subscription_info={
                        "endpoint": sub.endpoint,
                        "keys": {"p256dh": sub.p256dh, "auth": sub.auth}
                    },
                    data=json.dumps({"title": "Learning Reminder 📚", "body": message}),
                    vapid_private_key=settings.VAPID_PRIVATE_KEY,
                    vapid_claims={"sub": f"mailto:{settings.VAPID_ADMIN_EMAIL}"}
                )
                sent += 1
            except WebPushException as ex:
                failed += 1
                print(f"Push failed: {ex}")

        return Response({'sent': sent, 'failed': failed})
        

class PreferencesView(APIView):
    """Get or update scheduling preferences."""
    def get(self, request):
        pref, _ = GlobalPreference.objects.get_or_create(pk=1)
        return Response({
            "start_date": pref.curriculum_start_date,
            "reminder_time": pref.daily_reminder_time,
            "is_enabled": pref.is_enabled
        })

    def post(self, request):
        pref, _ = GlobalPreference.objects.get_or_create(pk=1)
        data = request.data
        
        if 'start_date' in data:
            pref.curriculum_start_date = data['start_date']
        if 'reminder_time' in data:
            pref.daily_reminder_time = data['reminder_time']
        if 'is_enabled' in data:
            pref.is_enabled = data['is_enabled']
            
        pref.save()
        return Response({"status": "success"})
