from rest_framework import serializers
from .models import Blog
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
        fields = ['id', 'title', 'description', 'date_created', 'date_updated', 'body', 'author']
        