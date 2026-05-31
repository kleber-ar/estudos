from flask import Blueprint, Response
from models.history_model import HistoryModel

history_controller = Blueprint("history_controller", __name__)


@history_controller.route("/history/", methods=["GET"])
def list_history():
    return Response(
        HistoryModel.list_as_json(),
        mimetype="application/json",
        status=200,
    )
