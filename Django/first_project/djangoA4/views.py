from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    return render(request, 'index.html')

def printinfo(request):
    context = {
        "name":"Abshir",
        "favorite_food": "Torta",
        "favorite_vaction_spot": "Tulum",
    }
    return render(request, 'info.html', context)

def numbers(request):
    context = {
        "numbers": [1,2,3,4,5,6,7,8,9,10]
    }

    return render(request, 'numbers.html', context)


def printdata(request):
    if request.method == 'POST':
        context = {
            "name": request.POST['name'],
            "email": request.POST['email'],
            'favorite_food': request.POST['food']
        }

        return render(request, 'printdata.html', context)
    else:
        return redirect('/')