from django.apps import AppConfig


class NotificationsConfig(AppConfig):
    name = 'notifications'

    def ready(self):
        # Background scheduler disabled as requested
        # from .scheduler import start_scheduler
        # start_scheduler()
        pass
