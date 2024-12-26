from django.urls import path
from . import views

urlpatterns = [
    # path('', views.Home, name='home'),
    path('', views.movie_list, name='movie_list'),
]