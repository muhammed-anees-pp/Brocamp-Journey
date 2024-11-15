from django.shortcuts import render
from django.http import HttpResponse
from . models import Product
from django.template import loader

# Create your views here.
def home(request):
    product_list = Product.objects.all()
    template = loader.get_template('home.html')
    context = {
        'product_list': product_list,
    }

    return HttpResponse(template.render(context, request))
