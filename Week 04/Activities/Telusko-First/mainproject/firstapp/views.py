from django.shortcuts import render
from . models import Projects

# Create your views here.
def index(request):
    prd1 = Projects()
    prd1.title = "Amazon"
    prd1.dec = "It is builded with HTML and CSS"
    prd1.offer = True

    prd2 = Projects()
    prd2.title = "Tesla"
    prd2.dec = "Static Website"
    prd2.offer = False

    prd3 = Projects()
    prd3.title = "Frooti"
    prd3.dec = "Responsive Website"
    prd3.offer = True

    product = [prd1, prd2, prd3]

    return render(request, 'index.html', {'products':product})
