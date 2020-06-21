from users.serializers import UserSerializer
from .models import Course, Session, Question, Answer, Application
from rest_framework import serializers


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'session', 'title', 'description', 'created_at']


class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'question', 'user', 'content', 'created_at']


class ApplicationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Application
        fields = ['session', 'user']


class SessionSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    applications = ApplicationSerializer(many=True, read_only=True)

    class Meta:
        model = Session
        fields = ['id', 'course', 'title', 'repl_src', 'created_at', 'questions', 'applications']


class CourseSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    sessions = SessionSerializer(many=True, read_only=True)
    members = UserSerializer(many=True, read_only=True)

    def get_queryset(self):
        return Course.objects.filter(owner=self.request.user)

    class Meta:
        model = Course
        fields = ['id', 'title', 'owner', 'created_at', 'sessions', 'members']
        extra_kwargs = {'students': {'required': False}}
