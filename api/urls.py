from .views import BlogListView, BlogDetailView, BlogSearchView # new
from django.urls import path


urlpatterns = [
path('post/<int:pk>/', BlogDetailView.as_view(), name='post_detail'),
path('', BlogListView.as_view(), name='home'),
path('search/', BlogSearchView.as_view(), name='search'),
]
