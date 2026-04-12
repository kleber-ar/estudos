from google import genai
import os
from dotenv import load_dotenv
import gradio
import time

# Carrega as variáveis do arquivo .env
load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Cria o chat com Gemini
chat = client.chats.create(model='gemini-2.0-flash')
chat.send_message("Você é um assistente virtual que traduz ou resume documentos.")

def gradio_wrapper(message, _history):
    text = message.get("text", "")
    files_info = message.get("files", [])
    
    if not files_info:
        return "Envie um arquivo .txt ou .pdf para tradução ou resumo."

    for file_path in files_info:
        if not (file_path.endswith(".txt") or file_path.endswith(".pdf")):
            return "❌ Somente arquivos .txt ou .pdf são suportados no momento."

        # Processa .txt localmente
        if file_path.endswith(".txt"):
            try:
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                
                prompt = f"{text}\n\nAqui está o conteúdo do arquivo:\n{content}"
                response = chat.send_message(prompt)

                # Salva tradução/resumo
                with open("documento_processado.txt", "w", encoding="utf-8") as out:
                    out.write(response.text)

                return "✅ Documento processado com sucesso. Resultado salvo como 'documento_processado.txt'."
            except Exception as e:
                return f"Erro ao processar arquivo .txt: {e}"

        # Processa .pdf via Gemini API (upload necessário)
        try:
            uploaded = client.files.upload(file=file_path)

            # Aguarda processamento
            while uploaded.state == "PROCESSING":
                time.sleep(2)
                uploaded = client.files.get(name=uploaded.name)

            response = chat.send_message([text, uploaded])
            return response.text

        except Exception as e:
            return f"Erro ao enviar/processar arquivo .pdf: {e}"

# Interface Gradio multimodal
chatInterface = gradio.ChatInterface(fn=gradio_wrapper, title="resuma ou traduza docs", multimodal=True)
chatInterface.launch()
