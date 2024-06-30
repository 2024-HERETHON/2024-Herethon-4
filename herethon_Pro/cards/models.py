from django.db import models
import os
from uuid import uuid4
from django.utils import timezone

# 이미지 파일 경로 중복 방지
def upload_filepath(instance, filename):
    today_str = timezone.now().strftime("%Y%m%d")
    file_basename = os.path.basename(filename)
    return f'{instance._meta.model_name}/{today_str}/{str(uuid4())}_{file_basename}'

# 키워드 테이블
class Keyword(models.Model):
    name = models.CharField(max_length = 20)

    def __str__(self):
        return f'{self.name}'

class Card(models.Model):
    # <앞>
    # 6) 해당 키워드 언급 빈도 수
    # 7) 링크 복사 버튼

    # <뒤>
    # 해당 키워드 포함된 롤링페이퍼
    # 1) 롤링페이퍼 내용
    # 2) 작성자
    # 3) 작성 날짜

    name = models.TextField()   # 이름
    position = models.TextField()   # 소속 
    job = models.TextField()    # 직업
    keyword = models.ManyToManyField(to = Keyword, through = "CardKeyword", related_name = "cards") # 키워드
    image = models.ImageField(upload_to = upload_filepath, blank = True)
    created_at = models.DateTimeField(auto_now_add = True)

# 키워드 중간테이블
class CardKeyword(models.Model):
    keyword = models.ForeignKey(to = Keyword, on_delete = models.PROTECT, related_name = "keywords_cardkeyword")
    card = models.ForeignKey(to = Card, on_delete = models.CASCADE, related_name = "cards_cardkeyword")