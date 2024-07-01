from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('', main, name = 'main'),
    path('signup/', signup_view, name = 'signup'),
    path('login/', login_view, name = 'login'),
]