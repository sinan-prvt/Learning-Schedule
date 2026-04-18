from django.urls import path
from .views import CurriculumView, ToggleCompleteView

urlpatterns = [
    path('curriculum/', CurriculumView.as_view(), name='curriculum'),
    path('toggle/<str:item_type>/<int:pk>/', ToggleCompleteView.as_view(), name='toggle-complete'),
]
