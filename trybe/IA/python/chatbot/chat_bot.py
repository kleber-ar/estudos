
# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação

# Carrega as variáveis do arquivo .env
load_dotenv()

# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# ler um arquivo
with open("curriculo-joao-silva.txt", "r") as file:
    curriculum = file.read();

# Chamada direta usando o cliente
response = client.models.generate_content(
    model='gemini-2.5-flash', # ou outro modelo como 'gemini-2.0-flash'
    contents=f'analise esse {curriculum}',
)

print(response.text)
