package com.trybe.acc.java;

/**
 * Interface que define comportamentos dos veículos.
 */
public interface Veiculo {

  /**
   * Calcula o consumo de combustível.
   *
   * @param distancia distância percorrida
   * @return consumo calculado
   */
  double calcularConsumoCombustivel(double distancia);

  /**
   * Exibe informações do veículo.
   */
  void exibirInformacoes();

}
