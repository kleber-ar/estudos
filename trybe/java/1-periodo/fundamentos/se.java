import java.util.Random;

public class ResultadoAluno {

    public static void main(String[] args) {
        Random random = new Random();

        double mediaFinal = random.nextDouble() * 10;
        String resultado;

        if (mediaFinal >= 7) {
            resultado = "APROVADA";
        } else if (mediaFinal >= 6) {
            resultado = "REALIZAR PROVA BONUS";
        } else {
            resultado = "REPROVADA";
        }

        System.out.printf("Média final: %.2f%n", mediaFinal);
        System.out.println("Resultado: " + resultado);
    }
}
