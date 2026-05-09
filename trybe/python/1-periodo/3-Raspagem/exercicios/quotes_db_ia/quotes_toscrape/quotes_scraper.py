from quotes_toscrape.entities import Quote
import requests
from bs4 import BeautifulSoup


def fetch_content(url: str) -> str:
    """
    Faz uma requisição HTTP GET em uma url e retorna
    o conteúdo HTML da resposta
    """
    try:
        res = requests.get(url)
        res.raise_for_status()
    except requests.exceptions.HTTPError as err:
        raise ValueError(f"Erro ao acessar {url}. Detalhes: {err}")
    return res.text


def scrape_quotes(html: str) -> list[Quote]:
    bs = BeautifulSoup(html, "html.parser")
    result = []
    for quote_div in bs.find_all("div", {"class": "quote"}):
        quote_text = quote_div.span.text
        author = quote_div.find("small", {"class": "author"}).text
        tags = quote_div.find_all("a", {"class": "tag"})

        result.append(
            {
                "content": quote_text,
                "author": author,
                "tags": list(map(lambda x: x.text, tags)),
            }
        )

    return result


def scrape_next_page(html: str) -> str:
    bs = BeautifulSoup(html, "html.parser")
    next_page = bs.find("li", {"class": "next"})
    if next_page:
        return next_page.a["href"]
    else:
        return ""


def scrape_all_quotes() -> list[Quote]:
    """
    Acessa http://quotes.toscrape.com e retorna
    uma lista com as citações encontradas
    """
    base_url = "http://quotes.toscrape.com"
    result = []
    next_page = "/"
    while next_page:
        print(f"Scraping {base_url}{next_page}...")
        quotes_html = fetch_content(f"{base_url}{next_page}")
        result.extend(scrape_quotes(quotes_html))
        next_page = scrape_next_page(quotes_html)

    return result
