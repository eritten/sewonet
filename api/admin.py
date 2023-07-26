from django.contrib import admin
from .models import Blog
# Register your models here.

class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'author')
    list_per_page = 25
    
    #register the model
    admin.site.register(Blog)
    