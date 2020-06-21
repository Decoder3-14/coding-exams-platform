from rest_framework.response import Response
from rest_framework import viewsets
from .models import Course, Session, Question, Answer
from .serializers import CourseSerializer, SessionSerializer, QuestionSerializer, AnswerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from django.apps import apps
User = apps.get_model('users', 'User')


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('-created_at')
    serializer_class = CourseSerializer

    def get_queryset(self):
        user = self.request.user
        return Course.objects.filter(owner=user)


class SessionViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Session.objects.all().order_by('-created_at')
    serializer_class = SessionSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Question.objects.all().order_by('-created_at')
    serializer_class = QuestionSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Answer.objects.all().order_by('-created_at')
    serializer_class = AnswerSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enroll_students(request):
    course = Course.objects.filter(id=request.data['course']).first()
    emails = request.data['students']
    for email in emails:  # i only checked by email, full name has to be also checked maybe
        student = User.objects.filter(email=email, is_instructor=False).first()
        if student:
            if student not in course.members.all():
                course.members.add(student)
    course.save()
    return Response({'course': CourseSerializer(course).data})
