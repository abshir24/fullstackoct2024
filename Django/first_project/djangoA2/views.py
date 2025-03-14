from django.shortcuts import render

from datetime import datetime

# Create your views here.
def index(request):
    time = datetime.now()

    return render(request,"time.html", context = {"time": time })