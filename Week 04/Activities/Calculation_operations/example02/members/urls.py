from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('calc_operations', views.operations, name='calc'),
    
]