from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from . models import Details

# Create your views here.
def home(request):
    data = Details.objects.all()
    template = loader.get_template('details.html')
    context = {
        'data':data,
    }
    return HttpResponse(template.render(context,request))