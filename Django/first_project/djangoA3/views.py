from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def display_name(request, name):
    return HttpResponse(f'<h1> {name} </h1>')

def display_food(request, food):
    return HttpResponse(f'<h1> {food} </h1>')

def display_vacation(request, vacation):
    return HttpResponse(f'<h1> { vacation } </h1>')