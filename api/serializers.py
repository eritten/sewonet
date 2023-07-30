from rest_framework import serializers
from .models import Blog, Comment, Like, Dislike, Reply
from django.contrib.auth.models import User


# write foreign key serializer for user and blog
class   UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        
class       BlogSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    class   Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'date_created', 'date_updated', 'body', 'author', 'image']
        

#comment serializer for user and blog to display all comments on a blog
class   CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    class   Meta:
        model = Comment
        fields = ['id', 'body', 'date_created', 'user', 'blog']
#reply serializer for user and comment to display all replies on a comment
class   ReplySerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    class   Meta:
        model = Reply
        fields = ['id', 'body', 'date_created', 'user', 'comment']

#like serializer for user and blog to display all likes on a blog
class   LikeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    class   Meta:
        model = Like
        fields = ['id', 'user', 'blog']

#dislike serializer for user and blog to display all dislikes on a blog
class   DislikeSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    class   Meta:
        model = Dislike
        fields = ['id', 'user', 'blog']