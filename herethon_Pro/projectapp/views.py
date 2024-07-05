from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from .models import Project


@login_required
def project_create(request):
    if request.method == "POST":
        name = request.POST.get('name')
        title = request.POST.get('title')
        position = request.POST.get('position')
        keyword = request.POST.get('keyword')
        keyword2 = request.POST.get('keyword2')
        keyword3 = request.POST.get('keyword3')
        content = request.POST.get('content')
        user = request.user

        # Project 객체 생성 및 저장
        project = Project.objects.create(
            user=user,
            name=name,
            title=title,
            position=position,
            content=content,
            keyword=keyword,
            keyword2=keyword2,
            keyword3=keyword3,

        )
        # 생성된 글의 detail 페이지로 리디렉션
        return redirect('projectapp:detail')
    return render(request, 'projectapp/create.html')

@login_required
@require_http_methods(["GET", "POST"])

def project_detail(request):
    projects = Project.objects.filter(user=request.user).order_by('-id')
    return render(request, 'projectapp/detail.html', {'projects': projects})

def project_detail2(request, id):
    project = get_object_or_404(Project, id=id)
    return render(request, 'projectapp/list.html', {'projects' : project})

def project_update(request, id):
    project = get_object_or_404(Project, id = id)

    if request.method == "POST":
        project.name = request.POST.get('name')
        project.position = request.POST.get('position')
        project.job = request.POST.get('job')
        project.save()

        return redirect('projects:detail')
    return render(request, 'update.html', {'project' : project })

