# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def home(request):
#     return HttpResponse("Hello World!!!!!")


# from django.http import HttpResponse

# def home(request):
#     context = {
#         "name": "Anees",
#         "age": 21,
#         "course": "Python Full Stack"
#     }

#     # Convert dictionary to string (simple way)
#     response_text = f"Name: {context['name']}, Age: {context['age']}, Course: {context['course']}"
#     return HttpResponse(response_text)

from django.shortcuts import render
from .models import Student

def home(request):
    students = Student.objects.all()  # fetch all students
    return render(request, "home.html", {"students": students})