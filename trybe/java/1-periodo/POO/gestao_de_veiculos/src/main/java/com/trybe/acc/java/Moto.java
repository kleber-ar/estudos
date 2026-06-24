package com.trybe.acc.java;

public class Moto extends VeiculoBase {

  private String tipoMoto;

  /**
   * Construtor da classe Moto.
   *
   * @param marca marca do veículo
   * @param modelo modelo do veículo
   * @param ano ano de fabricação
   * @param tipoCombustivel tipo de combustível
   * @param capacidadeTanque capacidade do tanque
   * @param tipoMoto tipo da moto
   */
  public Moto(String marca, String modelo, int ano, String tipoCombustivel, int capacidadeTanque,
      String tipoMoto) {
    super(marca, modelo, ano, tipoCombustivel, capacidadeTanque);
    this.tipoMoto = tipoMoto;
  }

  /**
   * Calcula o consumo de combustível da moto.
   *
   * @param distancia distância percorrida
   * @return consumo de combustível
   */
  public double calcularConsumoCombustivel(double distancia) {
    double taxaConsumo = 18.0; // Taxa de consumo em km por litro para uma moto
    double consumoCombustivel = distancia / taxaConsumo;
    return consumoCombustivel;
  }

  /**
   * Exibe as informações da moto.
   */
  public void exibirInformacoes() {
    System.out.println("Marca: " + getMarca());
    System.out.println("Modelo: " + getModelo());
    System.out.println("Ano: " + getAno());
    System.out.println("Tipo de combustível: " + getTipoCombustivel());
    System.out.println("Capacidade do tanque: " + getCapacidadeTanque() + " litros");
    System.out.println("Tipo da moto: " + getTipoMoto());
  }

  public String getTipoMoto() {
    return tipoMoto;
  }

  public void setTipoMoto(String tipoMoto) {
    this.tipoMoto = tipoMoto;
  }
}
