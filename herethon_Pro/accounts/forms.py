from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from users.models import User
from django.contrib.auth.hashers import check_password

class SignUpForm(UserCreationForm):

    class Meta():
        model = get_user_model()
        fields = ['username', 'email']  # 비밀번호는 자동으로 생성됨

# 로그인 폼 추가 (에러메시지 추가되도록)
class LoginForm(forms.Form):
    username = forms.CharField(error_messages={"required" : "사용자 이름을 입력해주세요."}, max_length=32, label = "사용자 이름")
    password = forms.CharField(error_messages={"required" : "비밀번호를 입력해주세요."}, 
    			max_length= 64, label = "비밀번호", widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        if password and username :
            try:
                user = User.objects.get(username = username)
            except User.DoesNotExist:
                self.add_error("username", "사용자가 존재하지 않습니다.")
                return

            if not check_password(password, user.password):
                self.add_error("password", "비밀번호가 일치하지 않습니다.")
            else:
                self.user_id = user.id