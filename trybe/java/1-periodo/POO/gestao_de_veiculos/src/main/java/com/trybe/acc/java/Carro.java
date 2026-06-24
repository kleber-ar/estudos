package com.trybe.acc.java;

public class Carro extends VeiculoBase {

  private int numPassageiros;

  /**
   * Construtor da classe Carro.
   *
   * @param marca marca do veículo
   * @param modelo modelo do veículo
   * @param ano ano de fabricação
   * @param tipoCombustivel tipo de combustível
   * @param capacidadeTanque capacidade do tanque
   * @param numPassageiros número de passageiros
   */
  public Carro(String marca, String modelo, int ano, String tipoCombustivel, int capacidadeTanque,
      int numPassageiros) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.numPassageiros = numPassageiros;
  }

  /**
   * Calcula o consumo de combustível do carro.
   *
   * @param distancia distância percorrida
   * @return consumo de combustível
   */
  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 10.0; // Taxa de consumo em km por litro para um carro
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  /**
   * Exibe as informações do carro.
   */
  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Número de passageiros: " + getNumPassageiros());
  }

  public int getNumPassageiros() {
    return numPassageiros;
  }

  public void setNumPassageiros(int numPassageiros) {
    this.numPassageiros = numPassageiros;
  }
}
