from mocks.home import project_cards, project_titles


def test_status_response(response):
    assert response.status_code == 200


def test_quantity_of_projects(response):
    assert response.text.count(project_cards) == 3


def test_projects_titles(response):
    assert project_titles[1] in response.text
    assert project_titles[2] in response.text
    assert project_titles[3] in response.text
