x = "ab"
x, y = "ab"
# Saída:
# x = "a"; y = "b"

nome_e_nascimento = [("Felps", "México"), ("João", "Brasil")]
for nome, pais in nome_e_nascimento:
    print(nome, pais)
# Saída:
# Felps Máxico
# João Brasil

x, y = "Felps"
# Saída:
# ValueError: too many values to unpack

x, *y = "Felps"
# Saída:
# x = "F"
# y = ["e", "l", "p", "s"]