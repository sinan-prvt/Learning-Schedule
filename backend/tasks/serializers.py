from rest_framework import serializers
from .models import Week, Day, Session, Question, InterviewQuestion

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text', 'options', 'correct_option_index']

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Rename 'correct_option_index' to 'correct' for frontend compat
        ret['correct'] = ret.pop('correct_option_index')
        return ret


class InterviewQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterviewQuestion
        fields = ['id', 'question', 'answer', 'level', 'type']


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'time', 'title', 'description', 'is_completed']


class DaySerializer(serializers.ModelSerializer):
    sessions = SessionSerializer(many=True, read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)
    interview_questions = InterviewQuestionSerializer(many=True, read_only=True)
    sessionsCount = serializers.SerializerMethodField()
    weekId = serializers.CharField(source='week.week_id', read_only=True)
    day = serializers.IntegerField(source='day_number', read_only=True)

    class Meta:
        model = Day
        fields = ['id', 'weekId', 'day', 'topic', 'category', 'duration', 'is_completed', 'sessionsCount', 'sessions', 'questions', 'interview_questions']

    def get_sessionsCount(self, obj):
        return obj.sessions.count()


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Week
        fields = ['id', 'title', 'is_active']
        
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Frontend expects week.id to be the string 'W1'
        ret['id'] = instance.week_id
        ret['active'] = instance.is_active
        return ret
