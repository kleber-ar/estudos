package com.betrybe.sistemadevotacao;

import java.util.ArrayList;

/**
 * Classe responsável pelo gerenciamento da votação.
 */
public class GerenciamentoVotacao implements GerenciamentoVotacaoInterface {

  private ArrayList<PessoaCandidata> pessoasCandidatas;
  private ArrayList<PessoaEleitora> pessoasEleitoras;
  private ArrayList<String> cpfsComputados;

}
