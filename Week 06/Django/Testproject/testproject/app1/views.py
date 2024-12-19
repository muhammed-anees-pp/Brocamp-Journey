from django.shortcuts import render # type: ignore

# Create your views here.
def home(request):
    data = {'name': 'Anees', 'items': ['Python', 'Django']}
    return render(request, 'home.html', data)