from django.http import HttpResponse
from django.template import loader
from .models import Member

def members(request):
    mymembers = Member.objects.all().values()
    template = loader.get_template('all_members.html')
    context = {
        'mymembers': mymembers,
    }
    return HttpResponse(template.render(context, request))

def details(request, slug):
    mymember = Member.objects.get(slug=slug)
    template = loader.get_template('details.html')
    context = {
        'mymember':mymember,
    }
    return HttpResponse(template.render(context, request))

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

# def testing(request):
#   # mymembers = Member.objects.all().values()
#   template = loader.get_template('template.html')
#   context = {
#     'x': ['Apple', 'Banana', 'Cherry'], 
#     'y': ['Apple', 'Banana', 'Cherry'],
#   }
#   return HttpResponse(template.render(context, request))

def testing2(request):
   mydata = Member.objects.all().values()
   template = loader.get_template('template2.html')
   context = {
      'mymembers': mydata
   }
   return HttpResponse(template.render(context, request))