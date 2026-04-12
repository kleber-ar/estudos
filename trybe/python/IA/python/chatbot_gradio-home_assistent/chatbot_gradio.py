
# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
import gradio
#import pdb
#imports das funçoes
from google.genai.types import GenerateContentConfig, AutomaticFunctionCallingConfig
from home_assistent import close_curtains, set_light_values,intruder_alert,start_music,good_morning,set_thermostat_temperature,open_curtains

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Configuração da geração de conteúdo
config = GenerateContentConfig(
    tools=[
            set_light_values,
            intruder_alert,
            start_music,
            good_morning,
            set_thermostat_temperature,
            open_curtains,
            close_curtains
           ],
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
    try:
        response = chat.send_message(message)
        #pdb.set_trace() # DEBUG usando o PDB
    except Exception as e:
        print(f"[ERROR]{e}") # ajuda o DEBUG
        response = chat.send_message("Por favor,verifique o comando e tente novamente.")
    return response.text

# o multimodal como True permite enviar arquivos
chatInterface = gradio.ChatInterface(gradio_wrapper, title="Assistente Residencial Inteligente 🏠")
chatInterface.launch()
