import java.util.List;

public class ExerciciosStreams {
  public static void main(String[] args) {
    List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    List<Integer> numerosPares = filtrarNumerosPares(numeros);
    System.out.printf(numerosPares.toString());

    Integer soma = somaNumeros(numeros);
    System.out.printf(soma.toString());

    List<String> palavras = List.of("java", "stream", "programação", "backend");
    System.out.printf(converteParaCaixaAlta(palavras).toString());

    System.out.printf(stringsMaioresQueX(palavras, 5).toString());

  }

  // Possível Implementação para o Exercício 1
  public static List<Integer> filtrarNumerosPares(List<Integer> numeros) {
    return numeros.stream().filter(num -> num % 2 == 0).toList();
  }

  // Possível Implementação para o Exercício 2
  public static List<String> converteParaCaixaAlta(List<String> palavras) {
    return palavras.stream().map(String::toUpperCase).toList();
  }

  // Possível Implementação para o Exercício 3
  public static int somaNumeros(List<Integer> numeros) {
    return numeros.stream().mapToInt(Integer::intValue).sum();
  }

  // Possível Implementação para o Exercício 4
  public static List<String> stringsMaioresQueX(List<String> palavras, int x) {
    return palavras.stream()
            .filter(palavra -> palavra.length() > x)
            .toList();
  }
}
