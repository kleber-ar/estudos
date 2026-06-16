import java.util.Scanner;

public class Diagnostico {

    public static void main(String[] args) {

        Avaliacao avaliacao = new Avaliacao();

        Scanner scanner = new Scanner(System.in);

        System.out.print("Insira seu peso: ");
        double peso = Double.parseDouble(scanner.nextLine());

        System.out.print("Insira sua altura: ");
        double altura = Double.parseDouble(scanner.nextLine());

        avaliacao.calcularImc(peso, altura);

        scanner.close();
    }
}
