from django.urls import path
from .views import SaveSubscriptionView, SendTestNotificationView, PreferencesView, TestPingView

urlpatterns = [
    path('subscribe/', SaveSubscriptionView.as_view(), name='push-subscribe'),
    path('send-test/', SendTestNotificationView.as_view(), name='push-send-test'),
    path('preferences/', PreferencesView.as_view(), name='push-preferences'),
    path('test-ping/', TestPingView.as_view(), name='push-test-ping'),
]
