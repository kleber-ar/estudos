

# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação

# Carrega as variáveis do arquivo .env
load_dotenv()

# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Chamada para chat
chat = client.chats.create(model='gemini-2.0-flash')
response = chat.send_message('oi')

print(response.text)
