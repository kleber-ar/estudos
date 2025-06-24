
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

students_notes = client.files.upload(file="desempenho_estudantes_enem.csv")

# Chamada direta usando o cliente
response = client.models.generate_content(
    model='gemini-2.5-flash', # ou outro modelo como 'gemini-2.0-flash'
    contents=[f'gere um relatorio:',students_notes]
)

print(response.text)
