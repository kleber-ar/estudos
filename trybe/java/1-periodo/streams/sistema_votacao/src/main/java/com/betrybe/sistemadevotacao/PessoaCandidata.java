package com.betrybe.sistemadevotacao;

/**
 * Representa uma pessoa candidata.
 */
public class PessoaCandidata extends Pessoa {

  private int numero;
  private int votos;

  /**
 * Construtor da pessoa candidata.
 */
  public PessoaCandidata(String nome, int numero) {
    this.nome = nome;
    this.numero = numero;
    this.votos = 0;
  }

  /**
 * Retorna o número da pessoa candidata.
 */
  public int getNumero() {
    return numero;
  }

  /**
 * Define o número da pessoa candidata.
 */
  public void setNumero(int numero) {
    this.numero = numero;
  }

  /**
 * Retorna os votos recebidos.
 */
  public int getVotos() {
    return votos;
  }

  /**
 * Registra um voto para a pessoa candidata.
 */
  public void receberVoto() {
    votos += 1;
  }
}
