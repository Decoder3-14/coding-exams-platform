from rest_framework import status, viewsets
from rest_framework.response import Response
from .models import User, Student
from .serializers import UserSerializer, CustomRegisterSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = User.objects.all().order_by('-created_at')
    serializer_class = UserSerializer


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        })


@api_view(['POST', ])
@permission_classes([])
def register_view(request):
    print('works')
    serializer = CustomRegisterSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        user = serializer.save()
        role = request.data['role']
        if role == 'student':
            user.is_student = True
            student = Student.objects.create(user=user)
            student.save()
        else:
            user.is_instructor = True
        user.save()
        token = Token.objects.get(user=user).key
        response = {'type': 'Success', 'response': 'successfully registered', 'user': UserSerializer(user).data,
                    'token': token}
    else:
        response = serializer.errors
    return Response(response)


@api_view(['GET', ])
@permission_classes([IsAuthenticated])
def fetch_profile_view(request):
    user_obj = UserSerializer(request.user)
    return Response({'user': user_obj.data})


@api_view(['GET', ])
@permission_classes([IsAuthenticated])
def fetch_enrollments_view(request):
    user = User.objects.filter(email=request.user.email).first()
    enrollments = user.enrollments.all()
    return Response({'enrollments': enrollments})