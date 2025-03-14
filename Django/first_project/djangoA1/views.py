from django.shortcuts import render, HttpResponse


# Create your views here.
def index(request):
    return HttpResponse(
        '''
            Name: Abshir,
            Favorite Food: Quinoa,
            Favorite Movie: Inception,
            Favorite Music Genre: Afro-beats
        '''
    )