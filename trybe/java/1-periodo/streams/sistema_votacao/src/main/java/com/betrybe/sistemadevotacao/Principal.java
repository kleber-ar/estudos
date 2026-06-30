package com.betrybe.sistemadevotacao;

import java.util.Scanner;

/**
 * Classe principal do sistema de votação.
 */
public class Principal {

  /**
   * Método principal do sistema.
   */
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    GerenciamentoVotacao sistema = new GerenciamentoVotacao();

    // =========================
    // CADASTRO DE CANDIDATOS
    // =========================
    int opcao;

    do {
      System.out.println("Cadastrar pessoa candidata?");
      System.out.println("1 - Sim");
      System.out.println("2 - Não");
      System.out.println("Entre com o número correspondente à opção desejada:");

      opcao = Integer.parseInt(scanner.nextLine());

      if (opcao == 1) {
        System.out.println("Entre com o nome da pessoa candidata:");
        String nome = scanner.nextLine();

        System.out.println("Entre com o número da pessoa candidata:");
        int numero = Integer.parseInt(scanner.nextLine());

        sistema.cadastrarPessoaCandidata(nome, numero);
      }

    } while (opcao != 2);

    // =========================
    // CADASTRO DE ELEITORES
    // =========================

    do {
      System.out.println("Cadastrar pessoa eleitora?");
      System.out.println("1 - Sim");
      System.out.println("2 - Não");
      System.out.println("Entre com o número correspondente à opção desejada:");

      opcao = Integer.parseInt(scanner.nextLine());

      if (opcao == 1) {
        System.out.println("Entre com o nome da pessoa eleitora:");
        String nome = scanner.nextLine();

        System.out.println("Entre com o cpf da pessoa eleitora:");
        String cpf = scanner.nextLine();

        sistema.cadastrarPessoaEleitora(nome, cpf);
      }

    } while (opcao != 2);

    // =========================
    // VOTAÇÃO
    // =========================

    do {
      System.out.println(" Entre com o número correspondente à opção desejada:");
      System.out.println(" 1 - Votar");
      System.out.println(" 2 - Resultado Parcial");
      System.out.println(" 3 - Finalizar Votação");

      opcao = Integer.parseInt(scanner.nextLine());

      if (opcao == 1) {

        System.out.println(" Entre com o cpf da pessoa eleitora:");
        String cpf = scanner.nextLine();

        System.out.println(" Entre com o número da pessoa candidata:");
        int numero = Integer.parseInt(scanner.nextLine());

        sistema.votar(cpf, numero);
      }

      if (opcao == 2) {
        sistema.mostrarResultado();
      }

      if (opcao == 3) {
        sistema.mostrarResultado();
        System.out.println("Fim da votação.");
      }

    } while (opcao != 3);

    scanner.close();
  }
}
