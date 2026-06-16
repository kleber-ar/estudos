
package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class PessoaEstudante {

  /*Método calcularIdadeEmDias.
   */
  public static int calcularIdadeEmDias(int anos, int meses, int dias) {

    int diasPorMes = 30;
    int diasPorAno = 365;

    return ((anos * diasPorAno) + (meses * diasPorMes) + dias);
  }

  /*Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Qual o nome da Pessoa Estudante?");
    String nome = scanner.nextLine();
    System.out.println("Qual a sua idade em anos, meses e dias?");
    System.out.print("Anos: ");
    int anos = scanner.nextInt();
    System.out.print("Meses: ");
    int meses = scanner.nextInt();
    System.out.print("Dias: ");
    int dias = scanner.nextInt();

    int idadeEmDias = calcularIdadeEmDias(anos, meses, dias);
    System.out.println("A idade de " + nome + " em dias é " + idadeEmDias + ".");

    scanner.close();
  }
}
