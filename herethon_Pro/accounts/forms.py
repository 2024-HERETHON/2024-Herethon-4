from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from users.models import User
from django.contrib.auth.hashers import check_password

class SignUpForm(UserCreationForm):

    class Meta():
        model = get_user_model()
        fields = ['username', 'email']  # 비밀번호는 자동으로 생성됨