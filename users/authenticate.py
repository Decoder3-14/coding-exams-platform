from .models import User
from rest_framework import authentication
from rest_framework import exceptions


class UserAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):

        # Get the username and password
        email = request.data.get('email', None)
        password = request.data.get('password', None)

        if not email or not password:
            raise exceptions.AuthenticationFailed('No credentials provided.')

        user = User.objects.get(email=email, password=password)

        if user is None:
            raise exceptions.AuthenticationFailed('Invalid username/password.')

        if not user.is_active:
            raise exceptions.AuthenticationFailed('User inactive or deleted.')

        return user, None  # authentication successful
