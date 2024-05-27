from django.contrib.auth.forms import UserCreationForm

class AccountUpdateForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs) #초기화

        self.fields['username'].disabled = True #아이디 작성칸 비활성화시킴. 맘대로 조작하면 안되므로
