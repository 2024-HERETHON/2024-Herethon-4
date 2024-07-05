from django.conf import settings
from django.db import models

class Article(models.Model):
    keyword = models.TextField(max_length=20)
    keyword2 = models.TextField(max_length=20)
    keyword3 = models.TextField(max_length=20)
    title = models.TextField(max_length=100)
    POSITION_CHOICES = [
        ('family', '가족'),
        ('friend', '지인'),
        ('superior', '직장상사'),
        ('etc', '기타'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=True)  # 사용자
    content = models.TextField() #내용
    name = models.TextField()  # 이름
    position = models.CharField(max_length=10, choices=POSITION_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

