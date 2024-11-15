from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from . models import Blog

# Create your views here.
def home(request):
    posts = Blog.objects.all()
    template = loader.get_template('blog.html')
    context = {
        'data':posts,
    }
    return HttpResponse(template.render(context,request))