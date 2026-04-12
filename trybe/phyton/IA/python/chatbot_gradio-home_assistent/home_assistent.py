# home_assistant.py tem que tipar os parametros e o retorno

from typing import Literal, Dict, List

def set_light_values(brightness: int, color_temperature: str) -> Dict[str, object]:
    """
    Ajusta a luminosidade e a temperatura de cor das luzes.
    """
    return {"brightness": brightness, "color_temperature": color_temperature}

def intruder_alert() -> Dict[str, str]:
    """
    Ativa o alerta de intruso.
    """
    return {"alert": "Intruder alert activated"}

def start_music(energetic: bool, loud: bool, tempo: int) -> Dict[str, object]:
    """
    Inicia a reprodução de música com as características especificadas.
    """
    return {"energetic": energetic, "loud": loud, "tempo": tempo}

def good_morning() -> Dict[str, str]:
    """
    Executa a rotina matinal.
    """
    return {"routine": "Good morning routine started"}

def set_thermostat_temperature(temperature: float) -> Dict[str, float]:
    """
    Ajusta a temperatura do termostato.
    """
    return {"temperature": temperature}

# Estado global simples (em produção, seria um banco ou sistema real)
curtains_state: Dict[str, Literal["opened", "closed"]] = {
    "sala": "closed",
    "quarto": "closed",
    "cozinha": "closed",
    "banheiro": "closed",
    "escritório": "closed",
    "garagem": "closed"
}

def open_curtains(
    room: Literal["sala", "quarto", "cozinha", "banheiro", "escritório", "garagem", "todos"]
) -> Dict[str, List[str]]:
    global curtains_state

    rooms = (
        ["sala", "quarto", "cozinha", "banheiro", "escritório", "garagem"]
        if room == "todos"
        else [room]
    )

    msgs: List[str] = []
    for r in rooms:
        if curtains_state[r] == "opened":
            msgs.append(f"Cortinas do {r} já estão abertas.")
        else:
            curtains_state[r] = "opened"
            msgs.append(f"Cortinas do {r} foram abertas.")

    return {"status": msgs}

def close_curtains(
    room: Literal["sala", "quarto", "cozinha", "banheiro", "escritório", "garagem", "todos"]
) -> Dict[str, List[str]]:
    global curtains_state

    rooms = (
        ["sala", "quarto", "cozinha", "banheiro", "escritório", "garagem"]
        if room == "todos"
        else [room]
    )

    msgs: List[str] = []
    for r in rooms:
        if curtains_state[r] == "closed":
            msgs.append(f"Cortinas do {r} já estão fechadas.")
        else:
            curtains_state[r] = "closed"
            msgs.append(f"Cortinas do {r} foram fechadas.")

    return {"status": msgs}

__all__ = [
    "set_light_values",
    "intruder_alert",
    "start_music",
    "good_morning",
    "set_thermostat_temperature",
    "open_curtains",
    "close_curtains",
]
