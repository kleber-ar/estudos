

# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
import gradio

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Chamada para chat
chat = client.chats.create(model='gemini-2.0-flash')
chat.send_message('voce é um consultor de programação')

def gradio_wrapper(message, _history):
    response = chat.send_message(message)
    return response.text

chatInterface = gradio.ChatInterface(gradio_wrapper)
chatInterface.launch()
