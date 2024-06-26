# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


# Resposta da análise de complexidade:
# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).



def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] <= time_instant <= departures[index]:
            answer += 1
    return answer

# ou de uma maneira mais pythonica
def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival <= time_instant <= departure
        for arrival, departure in zip(arrivals, departures)
    )