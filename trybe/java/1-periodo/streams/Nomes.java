import java.util.ArrayList;
import java.util.List;

public class Nomes {
  public static void main(String[] args) {
    List<String> nomes =  new ArrayList<>();
    nomes.add("Maria");
    nomes.add("João");
    nomes.add("Pedro");
    nomes.add("Antonio");
    nomes.add("Thor");

    List<String> nomesFiltrados = new ArrayList<>();

    for (String nome : nomes) {
      if (nome.startsWith("A")) {
        nomesFiltrados.add(nome);
      }
    }

    for (String nomesFiltrado : nomesFiltrados) {
      System.out.println(nomesFiltrado);
    }
  }
}
