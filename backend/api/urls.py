from django.urls import path
from . import views

urlpatterns = [
    path('article/ra/', views.listArticles, name='home'),
    path('article/article1/', views.viewArticle1, name='article1'),
    path('article/article2/', views.viewArticle2, name='article2'),
    path('article/article3/', views.viewArticle3, name='article3'),
    path('article/article4/', views.viewArticle4, name='article4'),
    path('article/article5/', views.viewArticle5, name='article5'),
    path('article/<str:article_id>/', views.article_view, name='article'), # neww
]
