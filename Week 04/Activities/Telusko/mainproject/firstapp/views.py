from django.shortcuts import render
from . models import Projects

# Create your views here.
def index(request):
    pjct = Projects.objects.all()

    return render(request, 'index.html', {'products':pjct})
