package com.trybe.acc.java;

/**
 * Classe base abstrata para veículos.
 */
public abstract class VeiculoBase implements Veiculo {

  private String marca;
  private String modelo;
  private int ano;
  private String tipoCombustivel;
  private int capacidadeTanque;

  /**
   * Construtor da classe base.
   *
   * @param marca marca do veículo
   * @param modelo modelo do veículo
   * @param ano ano de fabricação
   * @param tipoCombustivel tipo de combustível
   * @param capacidadeTanque capacidade do tanque
   */
  public VeiculoBase(
      String marca,
      String modelo,
      int ano,
      String tipoCombustivel,
      int capacidadeTanque
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.tipoCombustivel = tipoCombustivel;
    this.capacidadeTanque = capacidadeTanque;
  }

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public int getAno() {
    return ano;
  }

  public void setAno(int ano) {
    this.ano = ano;
  }

  public String getTipoCombustivel() {
    return tipoCombustivel;
  }

  public void setTipoCombustivel(String tipoCombustivel) {
    this.tipoCombustivel = tipoCombustivel;
  }

  public int getCapacidadeTanque() {
    return capacidadeTanque;
  }

  public void setCapacidadeTanque(int capacidadeTanque) {
    this.capacidadeTanque = capacidadeTanque;
  }
}
