from parsel import Selector
import time
import requests

# Requisito 1


def fetch(url):
    """Seu código deve vir aqui"""
    headers = {
        "user-agent": "Fake user-agent",
    }

    try:
        # Rate limit
        time.sleep(1)

        response = requests.get(url, headers=headers, timeout=3)

        if response.status_code == 200:
            return response.text

        return None

    except requests.RequestException:
        return None


# Requisito 2
def scrape_updates(html_content):
    """Seu código deve vir aqui"""
    selector = Selector(html_content)

    urls = selector.css(".cs-overlay-link::attr(href)").getall()

    if not urls:
        return []

    return urls


# Requisito 3
def scrape_next_page_link(html_content):
    """Seu código deve vir aqui"""
    selector = Selector(html_content)

    next_page = selector.css(
        "a.next.page-numbers::attr(href)"
    ).get()

    return next_page


# Requisito 4
def scrape_news(html_content):
    selector = Selector(text=html_content)

    url = selector.css(
        'link[rel="canonical"]::attr(href)'
    ).get()

    title = selector.css(
        "h1.entry-title::text"
    ).get().strip()

    timestamp = selector.css(
        "li.meta-date::text"
    ).get()

    writer = selector.css(
        "span.author a::text"
    ).get()

    reading_time = selector.css(
        "li.meta-reading-time::text"
    ).re_first(r"(\d+)")

    summary = "".join(
        selector.css(
            "div.entry-content > p:first-of-type *::text"
        ).getall()
    ).strip()

    category = selector.css(
        "span.label::text"
    ).get()

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "reading_time": int(reading_time),
        "summary": summary,
        "category": category,
    }


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
    raise NotImplementedError
