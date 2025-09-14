from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout,authenticate,login
from django.contrib import messages

# Create your views here.
def index(request):
    if request.user.is_anonymous:
        return redirect("/login")
    return render(request, 'index.html')


def signup(request):
    
     if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken\n please retry with new username")
            return redirect('/signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, "Account created successfully \n Now login to your account")

     return render(request, 'login.html')

def loginuser(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return redirect("/")
        else:
            messages.error(request, "Invalid username or password")
            return render(request, 'login.html')



    return render(request, 'login.html')

def logoutuser(request): 
    logout(request)   
    return redirect("/login")