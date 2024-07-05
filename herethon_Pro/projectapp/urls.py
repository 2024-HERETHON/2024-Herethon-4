from django.urls import path

from projectapp.views import ProjectListView, ProjectCreateView, ProjectDetailView, ProjectUpdateView, ProjectDeleteView

app_name = 'projectapp'

urlpatterns = [
    path('create/', views.create, name='create'),
    path('detail/', views.detail, name='detail'),
    path('detail2/<int:id>/', views.detail2, name='detail2'),
 ] # 수정된 부분