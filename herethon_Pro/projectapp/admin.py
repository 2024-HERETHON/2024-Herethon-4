from django.contrib import admin

# Register your models here.
# admin.py
from django.contrib import admin
from projectapp.models import Project

admin.site.register(Project)