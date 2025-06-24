
# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação

# Carrega as variáveis do arquivo .env
load_dotenv()

# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# ler um arquivo.txt--------------

#with open("curriculo-joao-silva.txt", "r") as file:
#    curriculum = file.read();

#--------------------------------

#ler qualquer arquivo

foto1= client.files.upload(file="social_media_festa.png")
foto2= client.files.upload(file="social_media_viagem.png")

# Chamada direta usando o cliente
response = client.models.generate_content(
    model='gemini-2.0-flash', # ou outro modelo como 'gemini-2.0-flash'
    contents=[f'faça um convide curto baseado na foto:',foto2]
)

print(response.text)
