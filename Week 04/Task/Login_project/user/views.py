from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

# Create your views here.
@login_required(login_url='login')
@never_cache
def home(request):
    return render (request, 'home.html')

@never_cache
def signup(request):
    if request.user.is_authenticated:
        return render(request,'home.html')
    error=''

    if request.method=='POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        conf_password = request.POST.get('password2')

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return redirect('signup')

        # Check if email already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists")
            return redirect('signup')

        # password matching
        if password1!=conf_password:
            messages.error(request, "Password is not Matching")
            return redirect('signup')
        else:
            user = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=email,
                password=password1)
            user.save()
            return redirect('login')
    return render(request, 'signup.html')    

@never_cache
def login(request):
    if request.user.is_authenticated:
        return render(request,'home.html')
    
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password1')
        user_auth = authenticate(request,username=username,password=password)
        if user_auth is not None:
            auth_login(request,user_auth)
            return redirect('home')
        else:
            messages.error(request, "Username or Password is incorrect")
    return render (request, 'login.html')


def logout(request):
    auth_logout(request)
    return redirect('login')


