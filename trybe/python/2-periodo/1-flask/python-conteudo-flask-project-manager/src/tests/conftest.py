import pytest
from app import app


@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/test_database'
    return app.test_client()


@pytest.fixture
def response(client):
    return client.get("/")
