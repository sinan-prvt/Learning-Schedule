from django.db import models

class PushSubscription(models.Model):
    """Stores browser push subscription data for sending Web Push Notifications."""
    endpoint = models.TextField(unique=True)
    p256dh = models.TextField()
    auth = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Subscription @ {self.endpoint[:80]}..."


class GlobalPreference(models.Model):
    """Stores global user preferences for the roadmap scheduling."""
    curriculum_start_date = models.DateField(null=True, blank=True)
    daily_reminder_time = models.TimeField(default="09:00:00")
    is_enabled = models.BooleanField(default=False)
    last_sent_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"Settings (Start: {self.curriculum_start_date})"
