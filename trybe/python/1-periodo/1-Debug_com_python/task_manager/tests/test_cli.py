from unittest.mock import patch
from task_manager import cli, services


def test_complete_task_should_call_services_complete_task(capsys):
    fake_name = "João"
    services.create_task(fake_name)

    with patch("builtins.input", return_value="1"):
        cli.complete_task()

    captured = capsys.readouterr()
    assert captured.out == "> Tarefa completada com sucesso!\n"
