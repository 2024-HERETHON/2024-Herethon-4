from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from django.views.generic.list import MultipleObjectMixin

from accountapp.decorators import account_ownership_required
from accountapp.forms import AccountUpdateForm
from articleapp.models import Article

#선언하면 밑에 decorator 코드 반으로 줄어듬.
has_ownership = [account_ownership_required, login_required]

# 해당 만든 뷰 라우팅 필요. pragmatic urls.py에 urlpatterns 코드 추가
class AccountCreateView(CreateView):    #django.views.generic에서 상속받아 사용
    model = User
    form_class = UserCreationForm
    success_url = reverse_lazy('accountapp:hello_world') #reverse와 차이점은 함수와 클래스가 파이썬에서 불러와지는 방식의차이임. class 형 뷰에서는 reverse 사용할 수 없음. 함수형뷰에서 사용
    template_name = 'accountapp/create.html'


class AccountDetailView(DetailView, MultipleObjectMixin):
    model = User
    context_object_name = 'target_user'
    template_name = 'accountapp/detail.html'
    paginate_by = 25

    def get_context_data(self, **kwargs):
        object_list = Article.objects.filter(writer=self.get_object())
        return super(AccountDetailView, self).get_context_data(object_list=object_list, **kwargs)

@method_decorator(has_ownership,'get')
@method_decorator(has_ownership,'post')
class AccountUpdateView(UpdateView):
    model = User
    context_object_name = 'target_user'
    form_class = AccountUpdateForm
    success_url = reverse_lazy('accountapp:hello_world')
    template_name = 'accountapp/update.html'


@method_decorator(has_ownership,'get')
@method_decorator(has_ownership,'post')
class AccountDeleteView(DeleteView):
    model = User
    context_object_name = 'target_user'
    success_url = reverse_lazy('accountapp:login')
    template_name = 'accountapp/delete.html'

