from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET','POST'])
def index(request):
    student = {
        'name' : 'Anees',
        'domain' : 'Python',
        'learn' : ['Python', 'Django', 'SQL', 'React']
    }

    if request.method == 'GET':
        print("Your request is get")
        return Response(student)
    elif request.method == 'POST':
        print("Your request is post")
        return Response(student)