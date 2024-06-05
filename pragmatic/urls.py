"""
URL configuration for pragmatic project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from articleapp.views import ArticleListView


#accountapp 내에 urls에도 urlpatterns를 똑같이 적어줘야함.
class ArtivleListView:
    pass


urlpatterns = [
    path('', ArticleListView.as_view(), name='home'),     #우리 홈페이지주소로 접속했을때 보여지는 내용이므로 꼭 추가해야함.
    path('admin/', admin.site.urls),
    path('accounts/', include('accountapp.urls')),
    path('profiles/', include('profileapp.urls')),
    path('articles/', include('articleapp.urls')),
    path('comments/', include('commentapp.urls')),
    path('projects/', include('projectapp.urls')),
    path('subscribe/', include('subscribeapp.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    #media > profile 파일 안에 사진이 계속 저장됨.
