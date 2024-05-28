from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView

from accountapp.decorators import account_ownership_required
from accountapp.forms import AccountUpdateForm
from accountapp.models import HelloWorld

#선언하면 밑에 decorator 코드 반으로 줄어듬.
has_ownership = [account_ownership_required, login_required]

# 해당 만든 뷰 라우팅 필요. pragmatic urls.py에 urlpatterns 코드 추가
@login_required
def hello_world(request):

    #유저가 로그인 되어있는지 확인. 로그인 안되어있는경우에는 로그인하는 창으로 되돌려 보내야함.(이부분 원래 else로 구문추가해 구현했는데 @login_required 써서 지움)
    if request.user.is_authenticated:
    #post와 get을 나누는 알고리즘 작성
        if request.method == "POST":

            temp = request.POST.get('hello_world_input')

            new_hello_world = HelloWorld()   #models.py에 기입한 helloworld모델 불러와 새로운 변수로 저장
            new_hello_world.text = temp    #helloworld 모델 안에 구현되었던 text 속성값도 불러옴
            new_hello_world.save()     #이렇게까지 하면 이제 앞으로 입력되는 데이터는 db에 저장될 것.

            return HttpResponseRedirect(reverse('accountapp:hello_world')) #accountapp 내부에 있는 hello_world로 재접속하라는 뜻. 이렇게 안쓰고 밑처럼 render 적으면 새로고침할때마다 자동적으로 값이 복사되어 출력됨.
        else:
            hello_world_list = HelloWorld.objects.all()  #db에 쌓인 HelloWorld 데이터들을 긁어와서 display 하기 위한 코드. 새로운 리스트에 저장하고 return에 되돌려줌.
            return render(request, 'accountapp/hello_world.html', context={'hello_world_list': hello_world_list}) # 만들어둔 accountapp 내부에 hello_world 반환하는 코드로 작성


class AccountCreateView(CreateView):    #django.views.generic에서 상속받아 사용
    model = User
    form_class = UserCreationForm
    success_url = reverse_lazy('accountapp:hello_world') #reverse와 차이점은 함수와 클래스가 파이썬에서 불러와지는 방식의차이임. class 형 뷰에서는 reverse 사용할 수 없음. 함수형뷰에서 사용
    template_name = 'accountapp/create.html'


class AccountDetailView(DetailView):
    model = User
    context_object_name = 'target_user'
    template_name = 'accountapp/detail.html'

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

