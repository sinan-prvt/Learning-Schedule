from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Week, Day, Session
from .serializers import WeekSerializer, DaySerializer

class CurriculumView(APIView):
    def get(self, request):
        weeks = Week.objects.all().order_by('id')
        days = Day.objects.all().order_by('id')
        
        return Response({
            "weeks": WeekSerializer(weeks, many=True).data,
            "days": DaySerializer(days, many=True).data
        })

class ToggleCompleteView(APIView):
    def patch(self, request, item_type, pk):
        if item_type == 'session':
            obj = get_object_or_404(Session, pk=pk)
        elif item_type == 'day':
            obj = get_object_or_404(Day, pk=pk)
        else:
            return Response({"error": "Invalid type"}, status=400)
            
        obj.is_completed = not obj.is_completed
        obj.save()
        
        return Response({"status": "success", "is_completed": obj.is_completed})
