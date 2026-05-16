from tech_news.analyzer.reading_plan import ReadingPlanService  # noqa: F401, E261, E501
import pytest


def test_reading_plan_group_news(mocker):
    mock_news = [
        {
            "title": "Notícia 1",
            "reading_time": 4,
        },
        {
            "title": "Notícia 2",
            "reading_time": 3,
        },
        {
            "title": "Notícia 3",
            "reading_time": 10,
        },
        {
            "title": "Notícia 4",
            "reading_time": 15,
        },
    ]

    mocker.patch(
        "tech_news.analyzer.reading_plan.find_news",
        return_value=mock_news,
    )

    with pytest.raises(ValueError):
        ReadingPlanService.group_news_for_available_time(0)

    result = ReadingPlanService.group_news_for_available_time(10)

    assert result["readable"] == [
        {
            "unfilled_time": 3,
            "chosen_news": [
                ("Notícia 1", 4),
                ("Notícia 2", 3),
            ],
        },
        {
            "unfilled_time": 0,
            "chosen_news": [
                ("Notícia 3", 10),
            ],
        },
    ]

    assert result["unreadable"] == [
        ("Notícia 4", 15),
    ]
