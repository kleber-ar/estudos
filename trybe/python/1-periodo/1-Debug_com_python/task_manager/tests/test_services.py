from task_manager import services
from unittest.mock import patch, Mock


def test_get_tasks_should_same_as_database_read():
    mock_db_read = Mock()

    with patch("task_manager.database.read", mock_db_read):
        res = services.get_tasks()

    assert res == mock_db_read.return_value
    mock_db_read.assert_called_once()
