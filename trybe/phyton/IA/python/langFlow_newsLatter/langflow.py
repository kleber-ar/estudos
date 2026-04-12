import requests
import os
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    raise EnvironmentError("A variável GOOGLE_API_KEY não está definida no .env")

def generate_newsletter(theme: str, content_url: str) -> str:
    url = "http://localhost:7860/api/v1/run/acccb64f-99d8-4dfa-8ac3-40313ec45c4c"
    
    #dados dos valores no payload, olhar sempre dentro do json do flow.
    payload = {
        "input_value": theme,
        "urls":[content_url],
        "output_type": "chat",
        "input_type": "text"
    }

    headers = {
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        # Navegue na estrutura para pegar o texto da newsletter:
        newsletter_text = data["outputs"][0]["outputs"][0]["results"]["message"]["text"]
        return newsletter_text

    except requests.exceptions.RequestException as e:
        return f"Erro ao fazer requisição: {e}"
    except ValueError as e:
        return f"Erro ao processar resposta: {e}"
