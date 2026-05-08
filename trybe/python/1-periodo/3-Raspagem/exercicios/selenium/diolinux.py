# /// script
# dependencies = [
#   "selenium",
# ]
# ///

from selenium import webdriver
from selenium.webdriver.common.by import By
import time


def scrape(url):
    firefox = webdriver.Firefox()
    # Espera implícita para garantir que o JS do site carregue os posts
    firefox.implicitly_wait(15)

    posts = []

    try:
        firefox.get(url)
        # Uma pequena pausa para garantir que o layout renderizou
        time.sleep(2)

        # Buscamos os containers dos posts
        for post in firefox.find_elements(By.CLASS_NAME, 'inhype-post'):
            try:
                # Simplificando: buscamos o link direto que contém o título
                link_element = post.find_element(
                    By.CSS_SELECTOR, '.entry-title a')

                new_item = {
                    'title': link_element.text,  # .text é mais limpo que innerHTML
                    'link': link_element.get_attribute('href')
                }
                posts.append(new_item)
            except Exception as e:
                # Se um post falhar (ex: um anúncio no meio), continua para o próximo
                continue

    finally:
        # ISSO É VITAL: Fecha o navegador e libera a memória
        firefox.quit()

    return posts


if __name__ == "__main__":
    resultado = scrape('https://diolinux.com.br/')
    for p in resultado:
        print(f"Título: {p['title']}\nLink: {p['link']}\n{'-'*30}")
