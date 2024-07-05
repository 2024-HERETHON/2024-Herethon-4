from django.shortcuts import get_object_or_404, render, redirect
from django.views.decorators.http import require_http_methods

from articleapp.models import Article  # articleapp에 있는 모델 사용
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# 롤링페이퍼 조회
@login_required
def RollFront(request):
    author = request.user  # 현재 로그인한 사용자 정보 가져오기
    articles = Article.objects.filter(user=author)
    return render(request, 'detail.html', {'author': author, 'articles': articles})

def RollBack(request):
    return render(request, "RollBack.html")


def home(request):
    return render(request, 'articleapp/home.html')


# 내 롤링페이퍼 만들기 (create)
@login_required
def create(request):
    if request.method == "POST":
        name = request.POST.get('name')
        position = request.POST.get('position')
        content = request.POST.get('content')
        keyword = request.POST.get('keyword')  # 폼에서 받아오는 데이터의 키 이름 확인
        image = request.FILES.get('image')

        user = request.user  # 현재 로그인한 사용자 정보 가져오기

        # Article 객체 생성 및 저장
        article = Article.objects.create(
            user=user,
            name=name,
            position=position,
            content=content,
            keyword=keyword,  # 필드 이름 확인
            image=image,
        )

        return redirect('articleapp:RollFront')
    return render(request, 'create.html')

# 내 롤링페이퍼 수정
@login_required
def update(request, id):
    article = get_object_or_404(Article, id=id)

    if request.method == "POST":
        article.name = request.POST.get('name')
        article.position = request.POST.get('position')
        article.content = request.POST.get('content')
        article.keyword = request.POST.get('keyword')  # 폼에서 받아오는 데이터의 키 이름 확인

        image = request.FILES.get('image')
        if image:
            article.image.delete()
            article.image = image

        article.save()
        return redirect('articleapp:RollFront')
    return render(request, 'update.html', {'article': article})

# 내 롤링페이퍼 삭제
@login_required
def delete(request, id):
    article = get_object_or_404(Article, id=id)
    article.delete()
    return redirect('articleapp:RollFront')

@login_required
@require_http_methods(["GET", "POST"])
def detail(request, pk):
    article = get_object_or_404(Article, pk=pk)

    if request.method == 'POST':
        content = request.POST.get('content', '')
        name = request.POST.get('name', '')
        position = request.POST.get('position', '')

        # Article 객체 수정
        article.name = name
        article.position = position
        article.content = content

        article.save()

        return redirect('articleapp:detail', pk=article.pk)  # 수정된 글의 상세 페이지로 리디렉션

    context = {
        'article': article,
    }


    return redirect('home')  # 생성 후 기본 홈페이지로 리디렉션

return render(request, 'create.html')



