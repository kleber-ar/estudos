

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
chat.send_message(
    'Você é um assistente que analisa o sentimento de textos fornecidos,identificando se o sentimento é positivo, negativo ou neutro, e fornecendo um breve feedback.Tudo no idioma recebido'
)

#Toda a logica de como o gradio pega os arquivos. Tem q usar o PDB(debugger para ver os metadados no retorno)
def gradio_wrapper(message, _history):
    text = message.get("text","")
    files_info = message.get("files", [])
    uploaded_files = []

    if text:
        response = chat.send_message(text)
        return f"Análise do texto \n {response.text}"

    for file in files_info:

        if not file.endswith(".txt"):
            return "Apenas arquivos '.txt'"

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        if not content:
                return "Conteudo vazio"
        uploaded_files.append(content)
    try:
        response = chat.send_message([text] + uploaded_files)
        return response.text
    except Exception as e:
        response = chat.send_message(f"Explique que não suporta o tipo de arquivo do {e} e informe os que suporta")
    return response.text

# o multimodal como True permite enviar arquivos
chatInterface = gradio.ChatInterface(
    fn=gradio_wrapper,
    title="Analisador de Sentimentos 🎭",
    multimodal=True
)

chatInterface.launch()
