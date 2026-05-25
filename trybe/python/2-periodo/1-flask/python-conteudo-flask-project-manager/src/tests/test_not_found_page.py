import pytest
from mocks.not_found import message


@pytest.fixture
def response(client):
    return client.get("/unknown")


def test_status_response(response):
    assert response.status_code == 404


def test_content(response):
    assert message in response.text
