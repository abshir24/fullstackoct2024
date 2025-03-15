from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context = {
        "numbers": [1,2,3,4,5,6,7,8,9,10],
        'name': "Test Name" 
    }

    return render(request, 'index.html', context)

def display_number(request, number):
    return render(request,'number.html',{'number':number})