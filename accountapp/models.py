from django.db import models

# Create your models here.

class HelloWorld(models.Model):
    text = models.CharField(max_length=255, null=False)   #null=True로 하면 해당 text 데이터가 없어도 된다는 뜻.


