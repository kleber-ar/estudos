from datetime import datetime

from tech_news.database import db

# Requisito 7


def search_by_title(title):
    """Seu código deve vir aqui"""
    news = db.news.find(
        {"title": {"$regex": title, "$options": "i"}}
    )

    return [
        (new["title"], new["url"])
        for new in news
    ]


# Requisito 8
def search_by_date(date):
    """Seu código deve vir aqui"""
    try:
        converted_date = datetime.strptime(
            date, "%Y-%m-%d"
        ).strftime("%d/%m/%Y")

    except ValueError:
        raise ValueError("Data inválida")

    news = db.news.find(
        {"timestamp": converted_date}
    )

    return [
        (new["title"], new["url"])
        for new in news
    ]


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
    news = db.news.find(
        {
            "category": {
                "$regex": category,
                "$options": "i",
            }
        }
    )

    return [
        (new["title"], new["url"])
        for new in news
    ]
