from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from articleapp.views import detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', detail, name='home'),
    path('cards/', include('cards.urls')),
    path('accounts/', include('accounts.urls')),
    path('projects/', include('projectapp.urls')),
    path('articles/', include('articleapp.urls')),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
