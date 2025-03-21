from django.shortcuts import render, HttpResponse,redirect
from .models import Post

# Create your views here.
def index(request):
    context = {
        "all_posts": Post.objects.all() #[<Post>,<Post>,<Post>]
    }

    return render(request, 'index.html', context)

def addpost(request):
    if request.method == 'POST':
        Post.objects.create(title = request.POST['title'], post = request.POST['post'])
    
    return redirect('/')

def update(request,id):
    post = Post.objects.get(id = id) #[<POST>]

    post.title = "Updated Title"
    post.post= "Updated POST"

    post.save()

    return redirect('/')

def delete(request,id):
    post = Post.objects.get(id=id)

    post.delete()

    return redirect('/')
