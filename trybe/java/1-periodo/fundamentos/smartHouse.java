package com.trybe.java;

/*Classe*/
public class SmartHouse {

  /*Atributos */

  public boolean lampadaLigada;

  /*Construtor da classe SmartHouse.*/
  public SmartHouse() {
    this.lampadaLigada = false;
  }

  /*Método para ligar uma lâmpada.*/
  public void ligarLampada() {
    this.lampadaLigada = true;
  }

  /*Método para desligar uma lâmpada.*/
  public void desligarLampada() {
    this.lampadaLigada = false;
  }

  /*Método para verificar se uma lâmpada está ligada ou não.*/
  public boolean isLampadaLigada() {
    return lampadaLigada;
  }

  /*Método que simula conexão com a Internet.*/
  public boolean conectarInternet(double rate) {
    return rate > 0.5;
  }
}
