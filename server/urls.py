from django.contrib import admin
from django.urls import path, include
import users.views as users_views
from django.shortcuts import render


def index(request):
    return render(request, 'build/index.html')


urlpatterns = [
    path("", index, name="index"),
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/courses/', include('courses.urls')),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
