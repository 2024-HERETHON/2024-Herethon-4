from django.shortcuts import render,redirect
from .forms import *
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login

# 회원가입 초기 화면
def main(request):
    return render(request, 'accounts/main.html')

# 회원가입 - Form 활용
def signup_view(request):
    if request.method == "GET":
        form = SignUpForm()
        return render(request, 'accounts/signup.html', {'form' : form})
    
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        return redirect('accounts:main')
    else:
        return render(request, 'accounts/signup.html', {'form' : form})
    
# 로그인 - 뷰 수정(에러메시지가 뜨게)
# accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # 'home'로 리다이렉션
    else:
        form = AuthenticationForm(request)

    return render(request, 'accounts/login.html', {'form': form})
