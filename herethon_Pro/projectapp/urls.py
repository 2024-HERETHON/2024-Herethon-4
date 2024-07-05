from django.urls import path
from projectapp import views  # 추가


app_name = 'projectapp'

urlpatterns = [
    path('create/', views.project_create, name='create'),
    path('detail/<int:project_id>/', views.project_detail, name='detail'),
    path('detail2/<int:id>/', views.project_detail2, name='detail2'),

 ] # 수정된 부분




