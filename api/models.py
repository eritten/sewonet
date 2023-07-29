from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import User

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    date_created = models.DateTimeField('date published', default=now)
    date_updated = models.DateTimeField('date updated')
    body = models.TextField()
    image = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return self.title
    
    def summary(self):
        return self.body[:100]
    
    def pub_date_pretty(self):
        return self.pub_date.strftime('%b %e %Y')
    
class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    date_created = models.DateTimeField('date published', default=now)
    
    def __str__(self):
        return self.body[:100]

class Like(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='likes')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.blog.title
class Reply(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='replies')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    date_created = models.DateTimeField('date published', default=now)
    
    def __str__(self):
        return self.body[:100]
    
class Dislike(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='dislikes')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.blog.title
    

#reply model