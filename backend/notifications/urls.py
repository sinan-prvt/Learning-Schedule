from django.urls import path
from .views import SaveSubscriptionView, SendTestNotificationView

urlpatterns = [
    path('subscribe/', SaveSubscriptionView.as_view(), name='push-subscribe'),
    path('send-test/', SendTestNotificationView.as_view(), name='push-send-test'),
]
