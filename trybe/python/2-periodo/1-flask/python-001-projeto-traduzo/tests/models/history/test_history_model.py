import json
from src.models.history_model import HistoryModel


# Req. 7
def test_request_history():
    histories_json = HistoryModel.list_as_json()

    histories = json.loads(histories_json)

    assert len(histories) == 2

    assert histories[0]["text_to_translate"] == "Hello, I like videogame"
    assert histories[0]["translate_from"] == "en"
    assert histories[0]["translate_to"] == "pt"

    assert histories[1]["text_to_translate"] == "Do you love music?"
    assert histories[1]["translate_from"] == "en"
    assert histories[1]["translate_to"] == "pt"
