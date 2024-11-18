from django.shortcuts import render, reverse # new
from django.http import JsonResponse # new

# Create your views here.
def listArticles(request):
    return render(request, 'home.html')

def viewArticle1(request):
    ra = session_add(request, 'Article1', reverse('article1'))
    return render(request, 'article1.html', {'ra':ra})

def viewArticle2(request):
    ra = session_add(request, 'Article2', reverse('article2'))
    return render(request, 'article2.html', {'ra':ra})

def viewArticle3(request):
    ra = session_add(request, 'Article3', reverse('article3'))
    return render(request, 'article3.html', {'ra':ra})

def viewArticle4(request):
    ra = session_add(request, 'Article4', reverse('article4'))
    return render(request, 'article4.html', {'ra':ra})

def viewArticle5(request):
    ra = session_add(request, 'Article5', reverse('article5'))
    return render(request, 'article5.html', {'ra':ra})

def session_add(request, title, url):
    if 'ra' in request.session:
        ra = request.session['ra']
    else:
        ra={}
    if title not in ra:
        ra[title] = url
    
    request.session['ra'] = ra

    return ra

def article_view(request, article_id):
    # Get the article title based on the article_id
    article_title = f"Article {article_id[-1]}"  # Example: Article1 -> "Article 1"
    
    # Get the existing recently viewed articles from session
    recent_articles = request.session.get("recent_articles", [])
    
    # Add the current article if not already in the list
    if not any(article['title'] == article_title for article in recent_articles):
        recent_articles.insert(0, {"title": article_title, "url": f"/article/{article_id}"})
        if len(recent_articles) > 5:  # Limit to 5 recently viewed articles
            recent_articles = recent_articles[:5]
        request.session["recent_articles"] = recent_articles

    # Return the article and recent articles as JSON
    return JsonResponse({
        "title": article_title,
        "recent_articles": recent_articles
    })