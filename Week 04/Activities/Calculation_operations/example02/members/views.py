from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def home(request):
    return render(request, 'home.html', {'name':'Anees'})

def operations(request):
    value1 = int(request.GET['num1'])
    value2 = int(request.GET['num2'])
    sum = value1 + value2
    sub = value1 - value2
    mul = value1 * value2
    div = value1 / value2
    return render(request, 'result.html', {'add':sum, 'sub':sub, 'mul':mul, 'div':div})
