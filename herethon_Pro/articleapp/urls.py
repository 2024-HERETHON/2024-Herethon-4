from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from articleapp import views  # 추가

app_name = 'articleapp'

urlpatterns = [
    path('create/', views.create, name='create'),
    path('detail/', views.detail, name='detail'), 
    path('detail2/<int:id>/', views.detail2, name='detail2'),
 ] # 수정된 부분