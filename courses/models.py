from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=100)
    # code = models.CharField(max_length=50)
    # description = models.TextField()
    owner = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='owner')
    members = models.ManyToManyField('users.User', related_name='members')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{} | {}'.format(self.title, self.title)


class Session(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='sessions')
    title = models.CharField(max_length=100)
    # description = models.TextField()
    # published = models.BooleanField(default=False)
    repl_src = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Application(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='applications')
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='students')


class Question(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='questions')
    title = models.CharField(max_length=100)
    # points = models.FloatField(null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    application = models.ForeignKey(Application, on_delete=models.CASCADE)
    content = models.TextField()
    # result = models.FloatField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question
