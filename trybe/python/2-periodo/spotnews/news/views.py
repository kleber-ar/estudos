from django.shortcuts import get_object_or_404, render, redirect

from .models import News, Category
from .forms import CategoryForm, NewsForm


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


def categories_form(request):
    if request.method == "POST":
        form = CategoryForm(request.POST)

        if form.is_valid():
            Category.objects.create(
                name=form.cleaned_data["name"]
            )
            return redirect("home-page")

    else:
        form = CategoryForm()

    return render(
        request,
        "categories_form.html",
        {"form": form},
    )


def news_form(request):
    if request.method == "POST":
        form = NewsForm(
            request.POST,
            request.FILES,
        )

        if form.is_valid():
            news = News.objects.create(
                title=form.cleaned_data["title"],
                content=form.cleaned_data["content"],
                author=form.cleaned_data["author"],
                created_at=form.cleaned_data["created_at"],
                image=form.cleaned_data["image"],
            )

            news.categories.set(
                form.cleaned_data["categories"]
            )

            return redirect("home-page")
    else:
        form = NewsForm()

    return render(
        request,
        "news_form.html",
        {"form": form},
    )
