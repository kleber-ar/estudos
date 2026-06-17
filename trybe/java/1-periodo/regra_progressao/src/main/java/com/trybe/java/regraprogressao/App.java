package com.trybe.java.regraprogressao;

import java.util.Scanner;

/**
 * Classe principal da aplicação.
 */
public class App {

  /**
   * Método principal responsável por executar o programa.
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

    for (int i = 0; i < quantidade; i++) {
      System.out.println("Digite o nome da atividade " + (i + 1) + ":");
      atividades[i] = scanner.nextLine();

      System.out.println("Digite o peso da atividade " + (i + 1) + ":");
      pesos[i] = Integer.parseInt(scanner.nextLine());
      
      System.out.println(
          "Digite a nota obtida para "
              + atividades[i]
              + ":"
      );

      notas[i] = Double.parseDouble(scanner.nextLine());
    }

    scanner.close();
  }
}
