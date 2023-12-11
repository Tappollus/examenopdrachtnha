from django.urls import path
from . import views

urlpatterns = [   
    path('', views.post_activity, name='post_activity'),
]

