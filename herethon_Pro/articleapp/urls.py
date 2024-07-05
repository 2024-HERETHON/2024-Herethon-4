from django.urls import path

from articleapp import views
from articleapp.views import RollFront, create, update, delete, detail, RollBack

app_name = 'articleapp'

urlpatterns = [
    path('RollFront/', RollFront, name="RollFront"),  # 롤링페이퍼 전체조회
    path('create/', create, name="create"),  # 롤링페이퍼 생성
    path('update/<int:id>/', update, name="update"),  # 롤링페이퍼 수정
    path('delete/<int:id>/', delete, name="delete"),  # 롤링페이퍼 삭제
    path('detail/<int:id>/', detail, name="detail"), # 롤링페이퍼 상세조회
    path('rollback/', views.RollBack, name='RollBack'),
    path('list/', views.list, name='article_list'),

]
