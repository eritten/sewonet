from .views import BlogListView, BlogDetailView, BlogSearchView, CommentListView, ReplyListView, LikeListView, DislikeListView, CommentCreateView, ReplyCreateView, LikeCreateView, DislikeCreateView, UserCreateView
from django.urls import path


urlpatterns = [
path('post/<int:pk>/', BlogDetailView.as_view(), name='post_detail'),
path('', BlogListView.as_view(), name='home'),
path('search/', BlogSearchView.as_view(), name='search'),
path('post/<int:blog_id>/comments/', CommentListView.as_view(), name='comments'),
path('post/<int:blog_id>/comments/<int:comment_id>/replies/', ReplyListView.as_view(), name='replies'),
path('post/<int:blog_id>/likes/', LikeListView.as_view(), name='likes'),
path('post/<int:blog_id>/dislikes/', DislikeListView.as_view(), name='dislikes'),
path('post/<int:blog_id>/comments/create/', CommentCreateView.as_view(), name='comment_create'),
path('post/<int:blog_id>/comments/<int:comment_id>/replies/create/', ReplyCreateView.as_view(), name='reply_create'),
path('post/<int:blog_id>/likes/create/', LikeCreateView.as_view(), name='like_create'),
path('post/<int:blog_id>/dislikes/create/', DislikeCreateView.as_view(), name='dislike_create'),
path('users/create/', UserCreateView.as_view(), name='user_create'),
]
