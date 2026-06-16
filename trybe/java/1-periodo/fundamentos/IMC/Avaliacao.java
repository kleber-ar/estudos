public class Avaliacao {

    public void calcularImc(double peso, double altura) {

        double imc = peso / (altura * altura);

        String classificacao;

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        System.out.printf("Seu IMC é: %.2f%n", imc);
        System.out.println("Classificação: " + classificacao);
    }
}
