from django.shortcuts import get_object_or_404, render

from .models import News


def home(request):
    news = News.objects.all()

    return render(
        request,
        "home.html",
        {"news": news},
    )


def news_details(request, id):
    news = get_object_or_404(News, pk=id)

    return render(
        request,
        "news_details.html",
        {"news": news},
    )
