from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from articleapp import views
from articleapp.views import RollBack

urlpatterns = [
    path('', views.RollFront, name='RollFront'),   #우리 홈페이지주소로 접속했을때 보여지는 내용이므로 꼭 추가해야함.
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('articles/', include('articleapp.urls')),
    path('projects/', include('projectapp.urls')),
    path('rollback/', views.RollBack, name='RollBack'),
    path('list/', views.list, name='article_list'),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
