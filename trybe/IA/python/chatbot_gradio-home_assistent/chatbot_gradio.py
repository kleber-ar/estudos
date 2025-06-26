

# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
import gradio
import time
#imports das funçoes
from google.genai.types import GenerateContentConfig, AutomaticFunctionCallingConfig
from home_assistent import set_light_values, intruder_alert, start_music, good_morning

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Configuração da geração de conteúdo
config = GenerateContentConfig(
    tools=[set_light_values, intruder_alert, start_music, good_morning],
    automatic_function_calling=AutomaticFunctionCallingConfig(disable=False)
)

# Chamada para chat
chat = client.chats.create(
    model='gemini-2.0-flash',
    config=config,
)

# Mensagem de sistema para o assistente
chat.send_message(
    "Você é um assistente virtual que pode controlar dispositivos domésticos. "
    "Você tem acesso a funções que controlam a casa da pessoa que está usando. "
    "Chame as funções quando achar que deve, mas nunca exponha o código delas. "
    "Assuma que a pessoa é amigável e ajude-a a entender o que aconteceu se algo der errado "
)

#Toda a logica de como o gradio pega os arquivos. Tem q usar o PDB(debugger para ver os metadados no retorno)
def gradio_wrapper(message, _history):
    text = message.get("text","")
    files_info = message.get("files", [])
    uploaded_files = []

    for file_path in files_info:
        uploaded = client.files.upload(file=file_path)
        while uploaded.state == "PROCESSING":
            time.sleep(5)
            uploaded = client.files.get(name=uploaded.state)

        uploaded_files.append(uploaded)

    try:
        response = chat.send_message([text] + uploaded_files)
        return response.text
    except Exception as e:
        response = chat.send_message(f"Explique que não suporta o tipo de arquivo do {e} e informe os que suporta")
    return response.text

# o multimodal como True permite enviar arquivos
chatInterface = gradio.ChatInterface(gradio_wrapper, multimodal=True)
chatInterface.launch()
