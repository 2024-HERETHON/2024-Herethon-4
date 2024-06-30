from django.shortcuts import get_object_or_404, render, redirect
from .models import Card, Keyword

# 명함조회 - 앞
def cardFront(request):
    return render(request, "cardFront.html")

# 명함조회 - 뒤
def cardBack(request):
    return render(request, "cardBack.html")

# 내 명함 보기 - 앞
def mycardFront(request):
    cards = Card.objects.all().order_by('-id')
    card_count = cards.count()
    return render(request, 'mycardFront.html', {'cards' : cards, 'card_count' : card_count})

# 내 명함 보기 - 뒤 (수정해야함)
def mycardBack(request):
    return render(request, 'mycardBack.html')

# 내 명함 만들기 (create)
def create(request):
    keywords = Keyword.objects.all()

    if request.method == "POST":
        name = request.POST.get('name')
        position = request.POST.get('position')
        job = request.POST.get('job')

        keyword_id = request.POST.get('keyword')
        keyword = get_object_or_404(Keyword, id = keyword_id)

        image = request.FILES.get('image')

        card = Card.objects.create(
            name = name,
            position = position,
            job = job,
            image = image,
        )

        # 키워드 연결
        card.keyword.add(keyword)

        return redirect('mycardFront')
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
        return redirect('mycardFront')
    return render(request, 'update.html', {'card' : card, 'keywords' : keywords})

# 내 명함 삭제
def delete(request, id):
    card = get_object_or_404(Card, id = id)
    card.delete()
    return redirect('mycardFront')
