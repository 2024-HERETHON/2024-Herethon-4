from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

# 해당 만든 뷰 라우팅 필요. pragmatic urls.py에 urlpatterns 코드 추가
def hello_world(request):
    return HttpResponse('Hello world!')
