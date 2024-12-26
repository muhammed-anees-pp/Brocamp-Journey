from django.shortcuts import render
from django.http import HttpResponse
from .models import MovieInfo

# Create your views here.
def Home(request):
    return HttpResponse("Hello Goodmorning")

def movie_list(request):
    movies = MovieInfo.objects.all()
    return render(request, 'movie_list.html', {'movies': movies})
