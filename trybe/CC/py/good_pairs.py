# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.

# Resposta da análise de complexidade:
# O algoritmo realiza um for dentro de outro, portanto possui Complexidade de Tempo O(n²).


def good_pairs(numbers):
  answer = 0
  i = 0
  size = len(numbers)
  for i in range(size):
    for j in range(i + 1, size):
      if numbers[i] == numbers[i]:
        answer += 1
  return answer