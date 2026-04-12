
from google import genai
import os
from dotenv import load_dotenv
import gradio as gr

# Carrega variáveis do .env
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

# Cria o chat com Gemini
chat = client.chats.create(model='gemini-2.0-flash')
chat.send_message(
    "Você é um assistente de receitas culinárias. Fornece receitas baseadas nos ingredientes fornecidos, "
    "dá dicas de culinária e responde perguntas sobre preparo de pratos."
)

def gradio_wrapper(message, _history):
    response = chat.send_message(message)
    return response.text  # ou: response.candidates[0].content.parts[0].text

# Interface do Gradio
chatInterface = gr.ChatInterface(
    fn=gradio_wrapper,
    title="Assistente de Receitas Culinárias 🍳"
)
chatInterface.launch()

