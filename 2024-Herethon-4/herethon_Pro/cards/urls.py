from django.urls import path
from .views import *

app_name = 'cards'

urlpatterns = [
    path('cardFront/<int:id>/', cardFront, name = "cardFront"), # 명함 앞 조회
    path('cardBack/<int:id>/', cardBack, name = "cardBack"), # 명함 뒤 조회
    
    path('mycardFront/', mycardFront, name = "mycardFront"),
    path('mycardBack/<int:id>/', mycardBack, name = "mycardBack"),  # 나의 명함 - 뒤
    path('mycardRolling/<int:id>/', mycardRolling, name = "mycardRolling"),  # 나의 명함 - 뒤, 롤링페이퍼 수정
    path('select_rolling_paper/<int:id>/', select_rolling_paper, name = "select_rolling_paper"),  # 롤링페이퍼 선택 처리
    path('detail/<int:id>/', detail, name = "detail"),  # 롤링페이퍼 자세히 보기

    path('create/', create, name = "create"), # 명함 생성 
    path('update/<int:id>/', update, name = "update"),  # 명함 수정
    path('delete/<int:id>/', delete, name = "delete")  # 명함 삭제
]