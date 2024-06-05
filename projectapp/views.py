from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# Create your views here.

from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, DetailView, ListView
from django.views.generic.list import MultipleObjectMixin

from articleapp.models import Article
from projectapp.forms import ProjectCreationForm
from projectapp.models import Project
from subscribeapp.models import Subscription


# Create your views here.

@method_decorator(login_required, 'get')
@method_decorator(login_required, 'post')
class ProjectCreateView(CreateView):
    model = Project
    form_class = ProjectCreationForm #이 뷰가 사용할 폼 클래스를 지정합니다. 여기서는 ProjectCreationForm이라는 폼 클래스를 사용하여 Project 객체를 생성합니다. 이 폼 클래스는 모델의 필드와 유효성 검사 등을 정의합니다.
    template_name = 'projectapp/create.html'

    def get_success_url(self):
        return reverse('projectapp:detail', kwargs={'pk':self.object.pk})
    # 폼이 성공적으로 처리된 후 리디렉션할 URL을 반환


class ProjectDetailView(DetailView, MultipleObjectMixin):
    model = Project
    context_object_name = 'target_project'  #템플릿에서 객체를 참조할 때 사용할 이름을 지정함. 템플릿에서 {{ target_project.name }}와 같이 사용할 수 있음.
    template_name = 'projectapp/detail.html'

    paginate_by = 25

    def get_context_data(self, **kwargs):

        project = self.object
        user = self.request.user

        if user.is_authenticated:
            subscription = Subscription.objects.filter(user=user, project=project)
        else:
            subscription = None

        object_list = Article.objects.filter(project=self.get_object())
        return super(ProjectDetailView, self).get_context_data(object_list=object_list, subscription=subscription, **kwargs)
    #필터링 코드. 오버라이 예시. elf.get_object() 메서드를 사용하여 현재 뷰가 표시하고 있는 프로젝트 객체를 가져와서 해당 프로젝트와 연관된 기사들만 필터링하여 가져오게 됩니다.

class ProjectListView(ListView):
    model = Project
    context_object_name = 'project_list'
    template_name = 'projectapp/list.html'
    paginate_by = 25      #한 페이지에 25개의 객체가 표시됩니다. 그러면 페이지마다 25개의 객체가 표시되고, 사용자가 다음 페이지로 이동할 수 있는 페이지 링크가 제공됩니다





