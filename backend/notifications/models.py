from django.db import models

class PushSubscription(models.Model):
    """Stores browser push subscription data for sending Web Push Notifications."""
    endpoint = models.TextField(unique=True)
    p256dh = models.TextField()
    auth = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Subscription @ {self.endpoint[:80]}..."
