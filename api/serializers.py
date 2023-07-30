from rest_framework import serializers
from .models import Blog, Comment, Like, Dislike, Reply
from django.contrib.auth.models import User
from taggit.models import Tag
# creating for tag that will have a many to many relationship with blog
class   TagSerializer(serializers.ModelSerializer):
    class   Meta:
        model = Tag
        fields = ['id', 'name']


# write foreign key serializer for user and blog
class   UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        

# creating a serializer for blog that will have a many to many relationship with tag and a foreign key relationship with user
class   BlogSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    class   Meta:
        model = Blog
        fields = ['id', 'title', 'body', 'date_created', 'date_updated', 'author', 'image', 'tags']
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