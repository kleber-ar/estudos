import java.util.ArrayList;
import java.util.List;

public class Nomes {
  public static void main(String[] args) {
    List<String> nomes =  new ArrayList<>();
    nomes.add("Maria");
    nomes.add("João");
    nomes.add("Pedro");
    nomes.add("Antonio");
    nomes.add("Arthur");

    List<String> nomesFiltrados = nomes.stream()
      .filter(nome -> nome.startsWith("A")).map(String::toUpperCase)
      .toList();

    nomesFiltrados.forEach(System.out::println);
  }
}
