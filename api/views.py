from django.shortcuts import render
from .models import Blog, Comment, Reply 
from django.contrib.auth.models import User
from .serializers import BlogSerializer, UserSerializer, CommentSerializer, ReplySerializer, LikeSerializer, DislikeSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView


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
    
#view for comment to display on blog detail page
class CommentListView(ListAPIView):
    serializer_class = CommentSerializer
    def get_queryset(self):
        blog_id = self.kwargs['blog_id']
        return Blog.objects.get(id=blog_id).comments.all()
    
#reply view for comment to display on blog detail page
class ReplyListView(ListAPIView):
    serializer_class = ReplySerializer
    def get_queryset(self):
        comment_id = self.kwargs['comment_id']
        return Comment.objects.get(id=comment_id).replies.all()
#view for like to display on blog detail page
class LikeListView(ListAPIView):
    serializer_class = LikeSerializer
    def get_queryset(self):
        blog_id = self.kwargs['blog_id']
        return Blog.objects.get(id=blog_id).likes.all()
#view for dislike to display on blog detail page
class DislikeListView(ListAPIView):
    serializer_class = DislikeSerializer
    def get_queryset(self):
        blog_id = self.kwargs['blog_id']
        return Blog.objects.get(id=blog_id).dislikes.all()

#view to create comment
class CommentCreateView(CreateAPIView):
    serializer_class = CommentSerializer
    def perform_create(self, serializer):
        blog_id = self.kwargs['blog_id']
        serializer.save(blog=Blog.objects.get(id=blog_id))
#view to create reply
class ReplyCreateView(CreateAPIView):
    serializer_class = ReplySerializer
    def perform_create(self, serializer):
        comment_id = self.kwargs['comment_id']
        serializer.save(comment=Comment.objects.get(id=comment_id))
#view to create like
class LikeCreateView(CreateAPIView):
    serializer_class = LikeSerializer
    def perform_create(self, serializer):
        blog_id = self.kwargs['blog_id']
        serializer.save(blog=Blog.objects.get(id=blog_id))
#view to create dislike
class DislikeCreateView(CreateAPIView):
    serializer_class = DislikeSerializer
    def perform_create(self, serializer):
        blog_id = self.kwargs['blog_id']
        serializer.save(blog=Blog.objects.get(id=blog_id))

#view to create user
class UserCreateView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

