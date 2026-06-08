from django.shortcuts import get_object_or_404, render, redirect

from .models import News, Category
from .forms import CategoryForm


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
