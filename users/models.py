from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class UserManager(BaseUserManager):

    use_in_migrations = True

    def create_user(self, email, username, fullname, password):
        user = self.model(
            email=self.normalize_email(email),
            # birthdate=birthdate,
            username=username,
            fullName=fullname,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    USERNAME_FIELD = 'email'
    username = models.CharField(max_length=100)
    fullName = models.CharField(max_length=200)
    # birthdate = models.DateTimeField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_student = models.BooleanField(default=False)
    is_instructor = models.BooleanField(default=False)

    objects = UserManager()


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    enrolled_courses = models.ManyToManyField('courses.Course', related_name="my_enrollments")


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

