from django.contrib.auth.models import User
from django.db import models

from projectapp.models import Project


# Create your models here.


class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscription')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='subscription')

    #유저랑 유저프로젝트 쌍이 가지는 구독정보는 오직 하나여야하므로 설정
    class Meta:
        unique_together = ('user','project')