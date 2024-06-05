
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path

from accountapp import views
from accountapp.views import AccountCreateView, AccountDetailView, AccountUpdateView, AccountDeleteView

app_name = 'accountapp'

#라우팅 작성
urlpatterns=[
    path('login/', LoginView.as_view(template_name = 'accountapp/login.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('create/', AccountCreateView.as_view(), name='create'),   #회원가입 할 경로 지정
    path('detail/<int:pk>', AccountDetailView.as_view(), name='detail'),   #detail뒤에 고유키설정 꼭 해줘야함.
    path('update/<int:pk>', AccountUpdateView.as_view(), name='update'),
    path('delete/<int:pk>', AccountDeleteView.as_view(), name='delete'),
]