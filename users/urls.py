from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, register_view, fetch_enrollments_view, CustomAuthToken


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'register', register_view, name='register'),
    path(r'login', CustomAuthToken.as_view(), name='login'),
    path(r'fetch-enrollments', fetch_enrollments_view, name='fetch-enrollments'),
]
