from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0
    else:
        request.session['count'] += 1
    
    return render(request,"index.html")

def addtwo(request):
    request.session['count'] += 1

    return redirect('/')

def reset(request):
    del request.session['count']

    return redirect('/')