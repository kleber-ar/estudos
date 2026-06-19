package com.trybe.acc.pessoausuaria;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;
import java.util.stream.Collectors;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


public class PessoaUsuariaTest {

  @Test
  @DisplayName("1 - [Pessoa Usuárias] Valida se usuário executa regra")
  public void validaSePessoaUsuariaExecutaRegra() {
    var p = new PessoaUsuaria("bruce", "wayne");

    assertEquals("bruce.wayne", p.getPessoaUsuaria());
  }

  @Test
  @DisplayName("2 - [Pessoa Usuárias] Valida se usuário é sub-classe de pessoa")
  public void validaSePessoaUsuariaEhSubclasseDePessoa() {
    var p = new PessoaUsuaria("bruce", "wayne");

    assertEquals("Pessoa", p.getClass().getSuperclass().getSimpleName());
  }

  @Test
  @DisplayName("3 - [Pessoa Usuárias] Valida se usuário executa regra com nome nulo")
  public void validaSePessoaUsuariaExecutaRegraComNomeNulo() {
    var p = new PessoaUsuaria(null, "wayne");

    assertEquals("Pessoa usuária inválida", p.getPessoaUsuaria());
  }

  @Test
  @DisplayName("4 - [Pessoa Usuárias] Valida se usuário executa regra com sobrenome nulo")
  public void validaSePessoaUsuariaExecutaRegraComSobrenomeNulo() {
    var p = new PessoaUsuaria("bruce", null);

    assertEquals("Pessoa usuária inválida", p.getPessoaUsuaria());
  }

  @Test
  @DisplayName("5 - [Pessoa Usuárias] Valida se usuário executa regra com nome vazio")
  public void validaSePessoaUsuariaExecutaRegraComNomeVazio() {
    var p = new PessoaUsuaria("", "wayne");

    assertEquals("Pessoa usuária inválida", p.getPessoaUsuaria());
  }

  @Test
  @DisplayName("6 - [Pessoa Usuárias] Valida se usuário executa regra com sobrenome vazio")
  public void validaSePessoaUsuariaExecutaRegraComSobrenomeVazio() {
    var p = new PessoaUsuaria("bruce", "");

    assertEquals("Pessoa usuária inválida", p.getPessoaUsuaria());
  }

  @Test
  @DisplayName("7 - [Pessoa Usuárias] Valida se método implementa na sub-classe")
  public void validaSeMetodoImplementadoNaSubclasse() {
    var p = new PessoaUsuaria("bruce", "wayne");
    assertEquals(Arrays.stream(p.getClass().getDeclaredMethods()).count(), 1);
    assertEquals(Arrays.stream(p.getClass().getSuperclass().getDeclaredMethods()).count(), 0);
  }

  @Test
  @DisplayName("8 - [Pessoa Usuárias] Valida se método implementado tem nome correto")
  public void validaSeMetodoImplementadoNaSubclasseTemNomeCorreto() {
    var p = new PessoaUsuaria("bruce", "wayne");
    assertEquals(Arrays.stream(p.getClass().getDeclaredMethods()).count(), 1);
    assertEquals(Arrays.stream(p.getClass().getDeclaredMethods()).collect(Collectors.toList())
        .get(0).getName(), "getPessoaUsuaria");
  }

  @Test
  @DisplayName("9 - [Pessoa Usuárias] Valida se atributos estao declarados")
  public void validaSeAtributosDeclaradosNaSuperclass() {
    var p = new PessoaUsuaria("bruce", "wayne");
    assertEquals(Arrays.stream(p.getClass().getSuperclass().getDeclaredFields()).count(), 2);
  }

  @Test
  @DisplayName("10 - [Pessoa Usuárias] Valida se atributos declarados tem nomes corretos")
  public void validaSeAtributosDeclaradosNaSuperclassTemNomesCorretos() {
    var p = new PessoaUsuaria("bruce", "wayne");
    assertEquals(Arrays.stream(p.getClass().getSuperclass().getDeclaredFields()).count(), 2);
    assertEquals(Arrays.stream(p.getClass().getSuperclass().getDeclaredFields())
        .collect(Collectors.toList()).get(0).getName(), "nome");
    assertEquals(Arrays.stream(p.getClass().getSuperclass().getDeclaredFields())
        .collect(Collectors.toList()).get(1).getName(), "sobrenome");
  }
}
