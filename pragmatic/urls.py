from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from articleapp.views import ArticleListView


urlpatterns = [
    path('', ArticleListView.as_view(), name='home'),     #우리 홈페이지주소로 접속했을때 보여지는 내용이므로 꼭 추가해야함.
    path('admin/', admin.site.urls),
    path('accounts/', include('accountapp.urls')),
    path('articles/', include('articleapp.urls')),
    path('projects/', include('projectapp.urls')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    #media > profile 파일 안에 사진이 계속 저장됨.