from task_manager import services
from unittest.mock import patch, Mock


def test_get_tasks_should_same_as_database_read():
    mock_db_read = Mock()

    with patch("task_manager.database.read", mock_db_read):
        res = services.get_tasks()

    assert res == mock_db_read.return_value
    mock_db_read.assert_called_once()


def test_create_task_should_call_database_save():
    mock_db_save = Mock()

    fake_name = "João"
    with patch("task_manager.database.save", mock_db_save):
        services.create_task(fake_name)

    mock_db_save.assert_called_once_with(
        [{"id": 1, "name": fake_name, "completed": False}]
    )
