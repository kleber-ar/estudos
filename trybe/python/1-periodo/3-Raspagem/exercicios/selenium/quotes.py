# /// script
# dependencies = [
#   "selenium",
# ]
# ///

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import time


def scrape(url):
    # Configuração para rodar o Firefox de forma otimizada
    options = Options()
    # options.add_argument("--headless")  # Descomente para rodar sem abrir a janela do navegador

    # Inicializa o driver (o Selenium 4+ tenta baixar o driver sozinho)
    firefox = webdriver.Firefox(options=options)

    try:
        firefox.get(url)

        # Usar .text é mais comum que get_attribute('innerHTML') para pegar o conteúdo visível
        quote = firefox.find_element(By.CLASS_NAME, 'text').text

        print(f"Citação encontrada: {quote}")
        time.sleep(5)

    finally:
        # IMPORTANTE: Sempre feche o navegador para não deixar processos zumbis
        firefox.quit()


if __name__ == "__main__":
    scrape('https://quotes.toscrape.com/')
