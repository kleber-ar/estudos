import requests
import os
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    raise EnvironmentError("A variável GOOGLE_API_KEY não está definida no .env")

def generate_feedback_response(feedback_comment: str, product_url: str) -> str:
    url = "http://localhost:7860/api/v1/run/ad2ac4a4-262a-4fd9-a454-b212c9144edd"
    
    #dados dos valores no payload, olhar sempre dentro do json do flow.
    payload = {
        "input_value": feedback_comment,
        "urls":[product_url],
        "output_type": "text",
        "input_type": "text"
    }

    headers = {
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        # Navegue na estrutura para pegar o texto do output:
        answer = data["outputs"][0]["outputs"][0]["results"]["text"]["text"]
        return answer

    except requests.exceptions.RequestException as e:
        return f"Erro ao fazer requisição: {e}"
    except ValueError as e:
        return f"Erro ao processar resposta: {e}"
