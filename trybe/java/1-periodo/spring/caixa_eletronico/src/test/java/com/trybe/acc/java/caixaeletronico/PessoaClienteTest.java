package com.trybe.acc.java.caixaeletronico;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Teste dos métodos da classe PessoaCliente.
 *
 */
@DisplayName("Teste dos métodos da classe PessoaCliente")
class PessoaClienteTest {

  @Test
  @DisplayName("11 - Testa o construtor da classe Pessoa Cliente.")
  void construtorTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");

    assertEquals("433.892.200-11", pessoaCliente.getCpf());
  }

  @Test
  @DisplayName("12 - Testa o método adicionar conta e o método retornar número de contas.")
  void adicionarContaTestRetornaNumeroDeContasTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);

    assertEquals(1, pessoaCliente.retornaNumeroDeContas());
  }

  @Test
  @DisplayName("13 - Testa o método retornar saldo de uma conta específica da pessoa cliente.")
  void retornarSaldoContaEspecificaTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);
    conta.adicionarTransacao(2000, "Depósito recebido");

    assertEquals(2000, pessoaCliente.retornarSaldoContaEspecifica(0));
  }


  @Test
  @DisplayName("14 - Testa o método retornar id de uma conta específica da pessoa cliente.")
  void retornarIdContaEspecificaTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);

    assertNotEquals(null, pessoaCliente.retornarIdContaEspecifica(0));
  }

  @Test
  @DisplayName("15 - Testa o método retornar o extrato de uma conta específica da pessoa cliente.")
  void retornarExtratoContaEspecificaTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);

    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(baos);
    System.setOut(printStream);

    pessoaCliente.retornarExtratoContaEspecifica(0);

    String[] linha = baos.toString().split(System.lineSeparator());
    String saida = String.join(",", linha);

    assertNotEquals(null, saida);
  }

  @Test
  @DisplayName("16 - Testa o método adiciona transação de uma conta específica da pessoa cliente.")
  void adicionarTransacaoContaEspecificaTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);

    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(baos);
    System.setOut(printStream);

    pessoaCliente.adicionarTransacaoContaEspecifica(0, 2000, "Depósito recebido");
    pessoaCliente.retornarExtratoContaEspecifica(0);

    String[] linha = baos.toString().split(System.lineSeparator());
    String saida = String.join(",", linha);

    assertTrue(saida.contains("2000"));
  }

  @Test
  @DisplayName("17 - Testa o método validar senha.")
  void validarSenhaTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");

    assertTrue(pessoaCliente.validarSenha("1234"));
    assertFalse(pessoaCliente.validarSenha("12345"));
  }

  @Test
  @DisplayName("18 - Testa o método retornar resumo contas.")
  void retornarResumoContasTest() {
    Banco banco = new Banco();
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    Conta conta = new Conta("Poupança", pessoaCliente, banco);
    pessoaCliente.adicionarConta(conta);

    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    PrintStream printStream = new PrintStream(baos);
    System.setOut(printStream);

    pessoaCliente.retornarResumoContas();

    String[] linha = baos.toString().split(System.lineSeparator());
    String saida = String.join(",", linha);

    assertTrue(saida.contains("0"));

  }

  @Test
  @DisplayName("19 - Testa o método Getter do atributo cpf está retornando.")
  void getCpfTest() {
    PessoaCliente pessoaCliente = new PessoaCliente("Camaragibe Silva", "433.892.200-11", "1234");
    assertEquals("433.892.200-11", pessoaCliente.getCpf());

  }

}
