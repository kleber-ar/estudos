# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

# Resposta da análise de complexidade:
# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).

def shuffle(items):
  answer = []
  div_cards_by_two = len(items) // 2
  for offset in range(div_cards_by_two):
    answer.extend(items[offset::div_cards_by_two])
  return answer