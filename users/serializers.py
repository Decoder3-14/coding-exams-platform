from .models import User, Student
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'fullName', 'created_at', 'is_student', 'is_instructor']


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ['username', 'email', 'fullName', 'created_at', 'enrolled_courses']


class CustomRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'fullName', 'password')
        extra_keywords = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
            fullName=self.validated_data['fullName'],
            username=self.validated_data['username'],
            # birthdate=self.validated_data['birthdate']
        )
        password = self.validated_data['password']
        user.set_password(password)
        user.save()
        return user


class CustomUserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'fullName')
        read_only_fields = ('email', )
