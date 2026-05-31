from src.models.history_model import HistoryModel
from src.models.user_model import UserModel


def test_history_delete(app_test):
    user = UserModel(
        {
            "name": "admin",
            "token": "token-teste",
        }
    )
    user.save()

    history1 = HistoryModel(
        {
            "text_to_translate": "Hello",
            "translate_from": "en",
            "translate_to": "pt",
        }
    )
    history1.save()

    history2 = HistoryModel(
        {
            "text_to_translate": "World",
            "translate_from": "en",
            "translate_to": "pt",
        }
    )
    history2.save()

    before = len(HistoryModel.find())

    response = app_test.delete(
        f"/admin/history/{history1.data['_id']}",
        headers={
            "Authorization": "token-teste",
            "User": "admin",
        },
    )

    after = len(HistoryModel.find())

    assert response.status_code == 204
    assert after == before - 1
