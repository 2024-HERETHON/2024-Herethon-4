from django.contrib.auth.models import User
from django.http import HttpResponseForbidden

from articleapp.models import Article


def article_ownership_required(func):
    def decorated(request, *args, **kwargs):
        article = Article.objects.get(pk=kwargs['pk']) #본인인지 확인하는 작업 추가
        if not article.writer == request.user:    #여기 변함. article 쓰고있는 사람이 지금 request 보내는 유저와 같은지 확인.
            return HttpResponseForbidden()
        return func(request, *args, **kwargs)
    return decorated