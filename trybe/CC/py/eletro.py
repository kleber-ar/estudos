class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    pass


secador = Secador("Branco", "450", "127", "400")
batedeira = Batedeira("Prata", "200", "127", "290")
maquina_de_lavar = MaquinaDeLavar("Preta", "6000", "127", "1300")
ventilador = Ventilador("Branco", "250", "220", "100")


print(f"O secador {secador.cor} custa {secador.preco}.")
print(f"A batedeira {batedeira.cor} custa {batedeira.preco}.")
print(
    f"A máquina de lavar {maquina_de_lavar.cor} "
    f"custa {maquina_de_lavar.preco}."
)

# O secador BRANCO custa 400.
# A batedeira PRATA custa 290.
# A máquina de lavar PRETA custa 1300.


class Pessoa:
  def __init__(self, nome, saldo_conta):
    self.nome = nome
    self.saldo_conta = saldo_conta
    self.ventilador = None
  
  def comprar(self, ventilador):
    if ventilador.preco <= self.saldo_conta:
      self.saldo_conta -= ventilador.preco
      self.ventilador = ventilador

  def __str__(self):
    if (self.ventilador):
      return f"{self.nome} - possui um ventilador."
    return f"{self.nome} - não possui um ventilador."
  
pessoa = Pessoa("Kleber", saldo_conta=1000)
pessoa.comprar(ventilador)

print(pessoa)

