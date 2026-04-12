
# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
import gradio
import time
#imports das funçoes
from google.genai.types import GenerateContentConfig, AutomaticFunctionCallingConfig
from functions import atualizar_status_pedido,gerar_cupom_desconto,registrar_reclamacao

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Configuração da geração de conteúdo
config = GenerateContentConfig(
    tools=[atualizar_status_pedido,gerar_cupom_desconto,registrar_reclamacao],
    automatic_function_calling=AutomaticFunctionCallingConfig(disable=False)
)

# Chamada para chat
chat = client.chats.create(
    model='gemini-2.0-flash',
    config=config,
)

def assemble_prompt(message):
   prompt = [message["text"]]
   uploaded_files = upload_files(message)
   prompt.extend(uploaded_files)
   return prompt
def upload_files(message):
    uploaded_files = []
    if message["files"]:
        for file_gradio_data in message["files"]:
            uploaded_file = genai.upload_file(file_gradio_data["path"])
            while uploaded_file.state.name == "PROCESSING":
                time.sleep(5)
                uploaded_file = genai.get_file(uploaded_file.name)
            uploaded_files.append(uploaded_file)
    return uploaded_files

#Toda a logica de como o gradio pega os arquivos. Tem q usar o PDB(debugger para ver os metadados no retorno)
def gradio_wrapper(message, _history):
    user_input = assemble_prompt(message)
    business_rules = """
    Você é um assistente virtual de uma loja online de eletrônicos. Siga as seguintes regras:
    1. Se o cliente perguntar sobre o status de um pedido, forneça as informações correspondentes.
       - Se necessário, chame a função atualizar_status_pedido.
    2. Se o cliente enviar uma imagem de um produto com defeito, registre a reclamação.
       - Chame a função registrar_reclamacao e forneça um número de protocolo.
    3. Se o cliente for recorrente ou estiver insatisfeito, ofereça um cupom de desconto.
       - Chame a função gerar_cupom_desconto e envie o código ao cliente.
    4. Responda perguntas sobre políticas da loja, como devolução e troca.
    5. Se não entender a solicitação, peça esclarecimentos educadamente.
    """
    try:
        response = chat.send_message(f"Cliente: {user_input}\nRegras de negócio: {business_rules}")
    except Exception as e:
        response = chat.send_message(
            f"O usuário te enviou um arquivo para você ler e obteve o erro: {e}. "
            "Pode explicar o que houve e dizer quais tipos de arquivos você "
            "dá suporte? Assuma que a pessoa não sabe programação e "
            "não quer ver o erro original. Explique de forma simples e concisa."
        )
    return response.text

# o multimodal como True permite enviar arquivos
chatInterface = gradio.ChatInterface(gradio_wrapper,title="Assistente Virtual da Loja",
    multimodal=True,)
chatInterface.launch()
