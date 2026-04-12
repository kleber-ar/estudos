# Nova importação
from google import genai
import os
from dotenv import load_dotenv # Adicione esta importação
from google.genai.types import GenerateContentConfig, AutomaticFunctionCallingConfig
from flask import Flask, render_template, request
from user_data import get_user_history
from functions_book_recomendations import recommend_fiction,recommend_non_fiction,recommend_science

# Carrega as variáveis do arquivo .env
load_dotenv()
# Inicialização do cliente (agora a variável GEMINI_API_KEY será carregada)
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# se liga nas importaçoes com o flask
app = Flask(__name__)

# Configuração da geração de conteúdo
config = GenerateContentConfig(
    temperature=0.5,
    tools=[recommend_fiction,recommend_non_fiction,recommend_science],
    automatic_function_calling=AutomaticFunctionCallingConfig(disable=False)
)

# Chamada para chat
chat = client.chats.create(
    model='gemini-2.0-flash',
    config=config,
)

# fiz uma função pra chamada da api já com as regras de negocio
def ia_decision(user_id, history):
    business_rules = """Analise o histórico de compras do usuário e decida qual categoria de livros recomendar.
    Regras:
    1. Se o usuário comprou mais livros de ficção, recomende ficção.
    2. Se o usuário comprou mais livros de não ficção, recomende não ficção.
    3. Se o usuário demonstrou interesse em ciência, recomende ciência.
    4. Caso contrário, ofereça uma recomendação geral de ficção.
    """

    # Envia os dados e as regras de negócio para a IA
    response = chat.send_message(f"Histórico do usuário {user_id}: {history}; Regras de negócio: {business_rules}")

    # Retorna a resposta da IA
    return response.text

# Página inicial que lista todos os usuários
@app.route('/recommend/<int:user_id>')
def recommend(user_id):
    history = get_user_history(user_id)
    if not history:
        return "Usuário não encontrado", 404
    ia_response = ia_decision(user_id, history)
    return render_template('recommendation.html', user_id=user_id, message=ia_response)
if __name__ == '__main__':
    app.run(debug=True)

