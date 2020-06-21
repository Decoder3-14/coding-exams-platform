from django.urls import include, path
from rest_framework import routers
from .views import CourseViewSet, SessionViewSet, QuestionViewSet, SessionViewSet,\
    AnswerViewSet, enroll_students

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'enroll-students', enroll_students, name='enroll-students'),
]
