package com.betrybe.sistemadevotacao;

import java.util.ArrayList;

/**
 * Classe responsável pelo gerenciamento da votação.
 */
public class GerenciamentoVotacao implements GerenciamentoVotacaoInterface {

  private ArrayList<PessoaCandidata> pessoasCandidatas;
  private ArrayList<PessoaEleitora> pessoasEleitoras;
  private ArrayList<String> cpfsComputados;

  public GerenciamentoVotacao() {
    this.pessoasCandidatas = new ArrayList<>();
    this.pessoasEleitoras = new ArrayList<>();
    this.cpfsComputados = new ArrayList<>();
  }

  // =========================
  // CADASTRO
  // =========================

  public void cadastrarPessoaCandidata(String nome, int numero) {

    boolean numeroExiste = pessoasCandidatas.stream()
        .anyMatch(c -> c.getNumero() == numero);

    if (numeroExiste) {
      System.out.println("Número da pessoa candidata já utilizado!");
      return;
    }

    pessoasCandidatas.add(new PessoaCandidata(nome, numero));
  }

  public void cadastrarPessoaEleitora(String nome, String cpf) {

    boolean cpfExiste = pessoasEleitoras.stream()
        .anyMatch(e -> e.getCpf().equals(cpf));

    if (cpfExiste) {
      System.out.println("Pessoa eleitora já cadastrada!");
      return;
    }

    pessoasEleitoras.add(new PessoaEleitora(nome, cpf));
  }

  // =========================
  // VOTAÇÃO
  // =========================

  public void votar(String cpfPessoaEleitora, int numeroPessoaCandidata) {

    if (cpfsComputados.contains(cpfPessoaEleitora)) {
      System.out.println("Pessoa eleitora já votou!");
      return;
    }

    pessoasCandidatas.stream()
        .filter(c -> c.getNumero() == numeroPessoaCandidata)
        .findFirst()
        .ifPresent(PessoaCandidata::receberVoto);

    cpfsComputados.add(cpfPessoaEleitora);
  }

  // =========================
  // RESULTADO
  // =========================

  public void mostrarResultado() {

    if (cpfsComputados.isEmpty()) {
      System.out.println("É preciso ter pelo menos um voto para mostrar o resultado.");
      return;
    }

    int totalVotos = pessoasCandidatas.stream()
        .mapToInt(PessoaCandidata::getVotos)
        .sum();

    pessoasCandidatas.forEach(c -> {
      long percentual = Math.round((c.getVotos() * 100.0) / totalVotos);

      System.out.println(
          "Nome: " + c.getNome()
              + " - " + c.getVotos() + " votos ( " + percentual + "% )"
      );
    });

    System.out.println("Total de votos: " + totalVotos);
  }
}
