package com.trybe.acc.java;

public class Caminhao extends VeiculoBase {

  private double capacidadeCarga;

  /**
   * Construtor da classe Caminhao.
   *
   * @param marca marca do veículo
   * @param modelo modelo do veículo
   * @param ano ano de fabricação
   * @param tipoCombustivel tipo de combustível
   * @param capacidadeTanque capacidade do tanque
   * @param capacidadeCarga capacidade de carga do caminhão
   */
  public Caminhao(String marca, String modelo, int ano, String tipoCombustivel,
      int capacidadeTanque, double capacidadeCarga) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.capacidadeCarga = capacidadeCarga;
  }

  /**
   * Calcula o consumo de combustível do caminhão.
   *
   * @param distancia distância percorrida
   * @return consumo de combustível
   */
  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 6.0; // Taxa de consumo em km por litro para um caminhão
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  /**
   * Exibe as informações do caminhão.
   */
  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Capacidade de carga: " + getCapacidadeCarga() + " kg");
  }

  public double getCapacidadeCarga() {
    return capacidadeCarga;
  }

  public void setCapacidadeCarga(double capacidadeCarga) {
    this.capacidadeCarga = capacidadeCarga;
  }
}
