package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class Portaria {

  /*Método emitirRelatorio.
   */
  public static void emitirRelatorio(int qtdFundamental1, int qtdFundamental2, int qtdMedio) {
    int numPessoas = qtdFundamental1 + qtdFundamental2 + qtdMedio;
    Locale.setDefault(Locale.US);

    double porcMedio = 0d;
    double porcFundamental1 = 0d;
    double porcFundamental2 = 0d;

    if (numPessoas > 0) {
      porcMedio = 100.0 * qtdMedio / numPessoas;
      porcFundamental1 = 100.0 * qtdFundamental1 / numPessoas;
      porcFundamental2 = 100.0 * qtdFundamental2 / numPessoas;
    }

    System.out.println("----- Quantidade -----");
    System.out.println("Ensino Fundamental I: " + qtdFundamental1);
    System.out.println("Ensino Fundamental II: " + qtdFundamental2);
    System.out.println("Ensino Médio: " + qtdMedio + "\n");
    System.out.println("----- Percentual -----");
    System.out.println("Ensino Fundamental I: " + String.format("%.1f", porcFundamental1) + "%");
    System.out.println("Ensino Fundamental II: " + String.format("%.1f", porcFundamental2) + "%");
    System.out.println("Ensino Médio: " + String.format("%.1f", porcMedio) + "%" + "\n");
    System.out.println("TOTAL: " + numPessoas);
  }

  /*Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);

    int qtdFundamental1 = 0;
    int qtdFundamental2 = 0;
    int qtdMedio = 0;
    boolean emLoop = true;

    while (emLoop) {
      System.out.println("Entre com o número correspondente à opção desejada:");
      System.out.println("1 - Registrar o acesso de pessoa estudante");
      System.out.println("2 - Finalizar o acesso e emitir o relatório");

      int controle = scanner.nextInt();
      if (controle == 1) {
        System.out.println("Informe a idade da pessoa estudante:");
        int idade = scanner.nextInt();

        if (idade >= 15) {
          System.out.println("Pessoa estudante do Ensino Médio, catraca liberada!");
          qtdMedio++;
        } else if (idade >= 11) {
          System.out.println("Pessoa estudante do Ensino Fundamental II, catraca liberada!");
          qtdFundamental2++;
        } else {
          System.out.println("Pessoa estudante do Ensino Fundamental I, catraca liberada!");
          qtdFundamental1++;
        }
      } else if (controle == 2) {
        emLoop = false; // Finaliza o loop
      } else {
        System.out.println("Entre com uma opção válida!");
      }
    }

    emitirRelatorio(qtdFundamental1, qtdFundamental2, qtdMedio);
    scanner.close();
  }
}
