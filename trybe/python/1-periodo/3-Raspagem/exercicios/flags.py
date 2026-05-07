# /// script
# dependencies = [
#   "parsel",
#   "requests",
# ]
# ///

import requests
import os
from parsel import Selector

OS_PATH = "./country_flags/"
if not os.path.exists(OS_PATH):
    os.makedirs(OS_PATH)

# URL da galeria da Wikipedia
BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

# Boa prática: Adicionar um User-Agent para não ser bloqueado
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0"}

response = requests.get(BASE_URL, headers=headers)
selector = Selector(response.text)

# SELETOR ATUALIZADO:
# O seu HTML mostra que as imagens agora usam a classe 'mw-file-element'
# Vamos buscar todas as imagens dentro de elementos 'figure'
flags = selector.css("figure img.mw-file-element")

print(f"Iniciando download de {len(flags)} bandeiras...")

for img in flags:
    # Tentamos pegar o srcset (resolução maior), se não tiver, pegamos o src
    img_url = img.css("::attr(srcset)").get()

    if img_url:
        # O srcset vem como "url 1x, url 2x". Pegamos a de 2x (geralmente a última)
        img_url = img_url.split(",")[-1].strip().split(" ")[0]
    else:
        img_url = img.css("::attr(src)").get()

    if not img_url:
        continue

    # Resolve o protocolo //
    full_url = "https:" + img_url if img_url.startswith("//") else img_url

    # Define um nome amigável baseado na URL
    filename = img_url.split("/")[-1]

    try:
        image_content = requests.get(full_url, headers=headers).content
        with open(os.path.join(OS_PATH, filename), "wb") as file:
            file.write(image_content)
        print(f"Salvo: {filename}")
    except Exception as e:
        print(f"Erro ao baixar {filename}: {e}")
