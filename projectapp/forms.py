from django.forms import ModelForm

from projectapp.models import Project


#새로운 model에 form까지 다 만든 후 migration, migrate 꼭 하기!
class ProjectCreationForm(ModelForm):
    class Meta:
        model = Project
        fields = ['image', 'title', 'content']