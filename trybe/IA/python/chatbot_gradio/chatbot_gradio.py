

# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
import gradio
import time

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Chamada para chat
chat = client.chats.create(model='gemini-2.0-flash')
chat.send_message(
    "Você é um assistente virtual que pode receber e processar arquivos de vários tipos,como imagens, áudios, vídeos, textos e planilhas. Ao receber um arquivo, você deve analisá-lo e fornecer uma resposta adequada baseada no conteúdo. Tudo em PT-BR"
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
