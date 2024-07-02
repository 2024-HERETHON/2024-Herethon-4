from django.forms import ModelForm
from django import forms

from projectapp.models import Project


#새로운 model에 form까지 다 만든 후 migration, migrate 꼭 하기!
class ProjectCreationForm(ModelForm):
    content = forms.CharField(widget=forms.Textarea(attrs={'class': 'editable text-left',
                                                           'style': 'height : auto;'}))

    project = forms.ModelChoiceField(queryset=Project.objects.all(), required=False)  # 1,2,3,4 안골라도 제출되게하는 코드

    class Meta:
        model = Project
        fields = ['title', 'content', 'image']