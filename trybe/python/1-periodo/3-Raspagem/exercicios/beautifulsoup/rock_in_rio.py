# /// script
# dependencies = [
#   "requests",
#   "beautifulsoup4",
# ]
# ///

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://pt.wikipedia.org"
TARGET_URL = f"{BASE_URL}/wiki/Rock_in_Rio"


def scrape_rock_in_rio():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0"
    }

    try:
        response = requests.get(TARGET_URL, headers=headers)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")

        links = []

        # No HTML da Wikipedia, os links de artigos costumam estar dentro de <p> ou <table>
        # Vamos pegar todos os <a> que tenham um href
        for anchor in soup.find_all("a", href=True):
            href = anchor["href"]

            # Ajuste do Filtro para aceitar:
            # 1. Links que começam com /wiki/
            # 2. Links que começam com //pt.wikipedia.org/wiki/
            if "/wiki/" in href and ":" not in href:
                # O urljoin resolve tanto "//pt.wikipedia..." quanto "/wiki/..."
                full_url = urljoin(BASE_URL, href)

                # Evita pegar a página de desambiguação ou a principal se não quiser
                if "P%C3%A1gina_principal" not in full_url:
                    links.append(full_url)

        unique_links = list(dict.fromkeys(links))

        if unique_links:
            print(f"Sucesso! Encontrados {len(unique_links)} links únicos.")
            print("-" * 30)
            for link in unique_links[:20]:
                print(link)
        else:
            print("Ainda não encontramos links. Vamos testar o seletor bruto:")
            # Teste de emergência: imprime os 5 primeiros hrefs que o soup achou
            for a in soup.find_all("a", href=True)[:5]:
                print(f"Href encontrado: {a['href']}")

    except Exception as e:
        print(f"Erro: {e}")


if __name__ == "__main__":
    scrape_rock_in_rio()
