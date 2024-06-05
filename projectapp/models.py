from django.db import models

# Create your models here.

class Project(models.Model):
    image = models.ImageField(upload_to='project/', null=False)
    title = models.CharField(max_length=20, null=False)
    description = models.CharField(max_length=200, null=True)

    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pk} : {self.title}'    #게시판이름 내가 쓴 프로젝트명으로 보여지게하는 코드
