from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')     #profile과 user객체 1:1로 연결해주는 코드
    #CASCADE -> 연결되어있는 User객체가 delete될 때, 그와 연결되있는 profile 객체도 없어지게 설정해주는 명령어임.

    image = models.ImageField(upload_to='profile/', null=True)
    nickname = models.CharField(max_length=20, unique=True, null=True)    #닉네임 유일해야함.
    message = models.CharField(max_length=100, null=True)
