from django.shortcuts import render
from .models import Blog
from django.contrib.auth.models import User
from .serializers import BlogSerializer, UserSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView


# Create your views here.


class BlogListView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class   BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
# search view
class BlogSearchView(ListAPIView):
    serializer_class = BlogSerializer
    def get_queryset(self):
        title = self.kwargs['title']
        return Blog.objects.filter(title__icontains=title)