import java.util.ArrayList;
import java.util.List;

public class Media {
  public static void main(String[] args) {
    List<Integer> numeros = new ArrayList();
    numeros.add(1);
    numeros.add(2);
    numeros.add(3);
    numeros.add(4);
    numeros.add(5);

    int soma = numeros.stream().mapToInt(Integer::intValue).sum();
    double media = numeros.stream().mapToInt(Integer::intValue).average().orElse(0d);

    List<Integer> quadradoDosPares = numeros.stream().filter(numero -> numero % 2==0)
      .map(numeroPar -> numeroPar * numeroPar).toList();

    quadradoDosPares.forEach(System.out::println);
    System.out.println(soma);
    System.out.println(media);
  }
}
