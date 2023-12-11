from django.shortcuts import render
from .models import PostActivity
from django.utils import timezone

def post_activity(request):  
    posts = PostActivity.objects.order_by('date')
    return render(request, 'agenda/post_activity.html', {'posts': posts})