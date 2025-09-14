from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="home"),
    path('signup', views.signup, name="signup"),
    path('login', views.loginuser, name="login"),
    path('logout', views.logoutuser, name="logout"),
]