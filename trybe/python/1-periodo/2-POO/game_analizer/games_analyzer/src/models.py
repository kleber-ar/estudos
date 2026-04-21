# from typing import Any
from dataclasses import dataclass

# GamesData = list[dict[str, Any]]
InnerData = dict[str, int | float]


@dataclass
class GamesData:
    title: str
    features: dict[str, bool | int]
    metadata: dict[str, str | bool]
    metrics: dict[str, int | float]
    release: dict[str, str | int | bool]
    length: dict[str, InnerData]


# list[GamesData]
