from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from articleapp import views  # 추가
from articleapp.views import view_rolling_paper

app_name = 'articleapp'

urlpatterns = [
    path('create/', views.create, name='create'),
    path('detail/', views.detail, name='detail'), 
    path('detail2/<int:id>/', views.detail2, name='detail2'),
    path('rolling_paper/<int:article_id>/', view_rolling_paper, name='view_rolling_paper')
 ] # 수정된 부분
