import java.util.Scanner;

class UsandoScanner {

  public static void main(String[] args) {

    System.out.print("Entre com o número: ");
    String input = scanner.next();

    short numeroInteiroPequeno = Short.parseShort(input); // Converte para short.
    long numeroInteiroBemGrande = Long.parseLong(input); // Converte para long.
    float numeroDePontoFlutuante = Float.parseFloat(input); // Converte para float.
    double numeroDePontoFlutuanteComPrecisaoDupla = Double.parseDouble(input); // Converte para double.
    
    Scanner scanner = new Scanner(System.in);
    System.out.print("Entre com o primeiro número: ");
    String input1 = scanner.next();
    System.out.print("Entre com o segundo número: ");
    String input2 = scanner.next();

    int n1 = Integer.parseInt(input1);
    int n2 = Integer.parseInt(input2);

    int resultado = n1 + n2;
    System.out.println("O resultado da soma é: " + resultado);
    
    }
}
