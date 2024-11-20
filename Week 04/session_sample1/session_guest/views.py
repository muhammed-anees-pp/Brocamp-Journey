from django.shortcuts import render

# Create your views here.
def set_name(request):
    if request.method == 'POST':
        user_name = request.POST.get('name')
        request.session['user_name'] = user_name
    
    user_name =request.session.get('user_name', 'Guest')
    return render(request, 'name_form.html', {'user_name':user_name})