from django.contrib.auth.models import User
from django.db import models


# Create your models here.
# 회원탈퇴해도 게시글 삭제되지않고 알수없음으로 보여지는 설정.
class Project(models.Model):
    CATEGORY_CHOICES = [
        ('FR', '친구'),
        ('BS', '직장상사'),
        ('CW', '직장동료'),
    ]
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES, default='FR')
    keyword = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100, null=True)
    image = models.ImageField(upload_to='articles/', null=False)
    content = models.TextField(null=True)
    share = models.TextField(blank=True, null=False)
    created_at = models.DateField(auto_now_add=True, null=True)
    last_modified = models.DateTimeField(auto_now=True)  # 최근 수정일


    def __str__(self):
        return f'{self.pk} : {self.title}'    #게시판이름 내가 쓴 프로젝트명으로 보여지게하는 코드
