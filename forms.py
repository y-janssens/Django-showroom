from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile, Skill

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'username', 'password1', 'password2']
        labels = {
            'first_name': 'Name',
        }
    def __init__(self, *args, **kwags):
        super(CustomUserCreationForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})

class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = ['username', 'location', 'name', 'email', 'short_intro', 'bio', 'profile_image', 'social_github', 'social_twitter', 'social_linkedin', 'social_youtube', 'social_website' ]

    def __init__(self, *args, **kwags):
        super(ProfileForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})

class SkillForm(ModelForm):
    class Meta:
        model = Skill
        fields = '__all__'
        exclude = ['owner']
    
    def __init__(self, *args, **kwags):
        super(SkillForm, self).__init__(*args, **kwags)
        for i in self.fields:
            self.fields[i].widget.attrs.update({'class':'input'})