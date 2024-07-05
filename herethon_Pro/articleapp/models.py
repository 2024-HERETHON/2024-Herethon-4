from datetime import timezone
from django.contrib.auth.models import User
from django.db import models

from herethon_Pro import settings
from projectapp.models import Project
from django.conf import settings
from django.db import models
import os
from uuid import uuid4
from django.utils import timezone
from django.contrib.auth.models import User

from django.db import models

# 이미지 파일 경로 중복 방지
def upload_filepath(instance, filename):
    today_str = timezone.now().strftime("%Y%m%d")
    file_basename = os.path.basename(filename)
    return f'{instance._meta.model_name}/{today_str}/{str(uuid4())}_{file_basename}'

# Create your models here.
class Article(models.Model):
    position = models.CharField(max_length=20)
    position2 = models.CharField(max_length=20)
    position3 = models.CharField(max_length=20)
    keyword = models.CharField(max_length=20, choices=[
        ('family', '가족'),
        ('friend', '지인'),
        ('superior', '직장상사'),
        ('etc', '기타'),
    ])
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # 사용자
    content = models.TextField() #내용
    name = models.TextField()  # 이름
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, related_name='article', null=True)
    image = models.ImageField(upload_to=upload_filepath, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)







