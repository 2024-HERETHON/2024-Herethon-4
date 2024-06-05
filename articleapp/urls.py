from django.urls import path    #선언주의
from . import views

app_name = 'articleapp'

urlpatterns = [
    path('list/', views.ArticleListView.as_view(), name='list'),
    path('create/', views.ArticleCreateView.as_view(), name='create'),
    path('detail/<int:pk>/', views.ArticleDetailView.as_view(), name='detail'),
    path('update/<int:pk>/', views.ArticleUpdateView.as_view(), name='update'),
    path('delete/<int:pk>/', views.ArticleDeleteView.as_view(), name='delete'),
]
