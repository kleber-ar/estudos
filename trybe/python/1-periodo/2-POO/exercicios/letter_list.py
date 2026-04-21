
from typing import List


def string_filter(input_list: List[str], char: str) -> List[str]:
    result = []
    for word in input_list:
        if word.startswith(char):
            result.append(word)
    return result
