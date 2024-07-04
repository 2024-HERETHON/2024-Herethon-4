from django.shortcuts import get_object_or_404, render, redirect
from .models import Card, Keyword
from articleapp.models import Article   # articleapp에 있는 모델 사용
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# 명함조회 - 앞
def cardFront(request):
    author = get_object_or_404(User, id=id)
    articles = Article.objects.filter(writer=author)
    return render(request, 'cardFront.html', {'author': author, 'articles': articles})

# 명함조회 - 뒤
def cardBack(request):
    return render(request, "cardBack.html")

# 내 명함 보기 - 앞
def mycardFront(request):
    cards = Card.objects.filter(user=request.user).order_by('-id')  # 로그인 한 사용자가 쓴 명함 불러오기
    card_count = cards.count()  # 명함 개수
    return render(request, 'mycardFront.html', {'cards' : cards, 'card_count' : card_count})
    
# 내 명함 보기 - 뒤 (롤링페이퍼 한 개 불러오기)    
def mycardBack(request, id):
    card = get_object_or_404(Card, id=id)
    selected_article = card.selected_article
    return render(request, 'mycardBack.html', {'card' : card, 'selected_article': selected_article})

# 나의 명함 뒤 롤링페이퍼 수정
def mycardRolling(request, id):
    card = get_object_or_404(Card, id=id)
    articles = Article.objects.all().order_by('-id')
    return render(request, 'mycardRolling.html', {'card': card, 'articles': articles})

# 롤링페이퍼 선택 처리
def select_rolling_paper(request, id):
    card = get_object_or_404(Card, id=id)
    if request.method == "POST":
        selected_article_id = request.POST.get('selected_article')
        if selected_article_id:
            selected_article = get_object_or_404(Article, id=selected_article_id)
            card.selected_article = selected_article
            card.save()
        return redirect('cards:update', id=card.id)
    
# 롤링페이퍼 자세히 보기
def detail(request, id):
    card = get_object_or_404(Card, id=id)
    selected_article = card.selected_article
    return render(request, 'detail.html', {'card' : card, 'selected_article': selected_article})

# 내 명함 만들기 (create)
@login_required
def create(request):
    keywords = Keyword.objects.all()

    if request.method == "POST":
        name = request.POST.get('name')
        position = request.POST.get('position')
        job = request.POST.get('job')

        keyword_id = request.POST.get('keyword')
        keyword = get_object_or_404(Keyword, id = keyword_id)

        image = request.FILES.get('image')

        # 현재 로그인한 사용자 가져오기
        user = request.user

        card = Card.objects.create(
            user = user,
            name = name,
            position = position,
            job = job,
            image = image,
        )

        # 키워드 연결
        card.keyword.add(keyword)

        return redirect('cards:mycardFront')
    return render(request, 'create.html', {'keywords' : keywords})

# 내 명함 수정
def update(request, id):
    card = get_object_or_404(Card, id = id)    
    keywords = Keyword.objects.all()

    if request.method == "POST":
        card.name = request.POST.get('name')
        card.position = request.POST.get('position')
        card.job = request.POST.get('job')

        keyword_id = request.POST.get('keyword')
        keyword = get_object_or_404(Keyword, id = keyword_id)

        card.keyword.clear()
        card.keyword.add(keyword)

        image = request.FILES.get('image')
        if image:
            card.image.delete()
            card.image = image

        card.save()
        return redirect('cards:mycardFront')
    return render(request, 'update.html', {'card' : card, 'keywords' : keywords})

# 내 명함 삭제
def delete(request, id):
    card = get_object_or_404(Card, id = id)
    card.delete()
    return redirect('cards:mycardFront')
