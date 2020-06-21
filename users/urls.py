from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, register_view, fetch_enrollments_view, fetch_profile_view, CustomAuthToken


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'register', register_view, name='register'),
    path(r'login', CustomAuthToken.as_view(), name='login'),
    path(r'fetch-profile', fetch_profile_view, name='fetch-profile'),
    path(r'enroll-students', fetch_enrollments_view, name='enroll-students'),
]
