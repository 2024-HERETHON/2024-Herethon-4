from django.forms import ModelForm

from commentapp.models import Comment

#새로운 model에 form까지 다 만든 후 migration, migrate 꼭 하기!
class CommentCreationForm(ModelForm):
    class Meta:
        model = Comment
        fields = ['content']