package com.trybe.java.regraprogressao;

import java.util.Scanner;

/**
 * Classe principal da aplicação.
 */
public class App {

  /**
   * Método principal.
   *
   * @param args argumentos recebidos na execução
   */
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite a quantidade de atividades para cadastrar:");
    int quantidade = Integer.parseInt(scanner.nextLine());

    String[] atividades = new String[quantidade];
    int[] pesos = new int[quantidade];
    double[] notas = new double[quantidade];

    int somaPesos = 0;

    for (int i = 0; i < quantidade; i++) {

      System.out.println("Digite o nome da atividade " + (i + 1) + ":");
      atividades[i] = scanner.nextLine();

      System.out.println("Digite o peso da atividade " + (i + 1) + ":");
      pesos[i] = Integer.parseInt(scanner.nextLine());

      somaPesos += pesos[i];

      System.out.println(
          "Digite a nota obtida para "
              + atividades[i]
              + ":"
      );

      notas[i] = Double.parseDouble(scanner.nextLine());
    }

    if (somaPesos != 100) {
      System.out.println("A soma dos pesos é diferente de 100!");
    } else {

      double notaFinal = 0;

      for (int i = 0; i < quantidade; i++) {
        notaFinal += pesos[i] * notas[i];
      }

      notaFinal /= 100;

      if (notaFinal >= 85.0) {
        System.out.println(
            "Parabéns! Você alcançou "
                + notaFinal
                + "%! E temos o prazer de informar "
                + "que você obteve aprovação!"
        );
      } else {
        System.out.println(
            "Lamentamos informar que, "
                + "com base na sua pontuação alcançada "
                + "neste período, "
                + notaFinal
                + "%, você não atingiu a pontuação mínima "
                + "necessária para sua aprovação."
        );
      }
    }

    scanner.close();
  }
}
