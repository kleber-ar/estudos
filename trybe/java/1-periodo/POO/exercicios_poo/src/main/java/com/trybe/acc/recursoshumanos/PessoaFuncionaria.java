package com.trybe.acc.recursoshumanos;
/**
  * Classe que representa uma pessoa funcionária no sistema de recursos humanos.
  */
 public class PessoaFuncionaria {
   private String nomeCompleto;
   private String cpf;
   private String endereco;
   private double salario;

   /**
    * Construtor para a classe PessoaFuncionaria.
    *
    * @param nomeEntrada String do nome completo
    * @param cpfEntrada String do CPF
    * @param enderecoEntrada String do endereço completo
    * @param salarioEntrada Double que representa o salário
    */

   public PessoaFuncionaria(String nomeEntrada, String cpfEntrada, String enderecoEntrada,
       double salarioEntrada) {
     nomeCompleto = nomeEntrada;
     cpf = cpfEntrada;
     endereco = enderecoEntrada;
     salario = salarioEntrada;
   }


   // getters e setters
   public String getNomeCompleto() {
     return nomeCompleto;
   }

   public void setNomeCompleto(String nomeCompleto) {
     this.nomeCompleto = nomeCompleto;
   }

   public String getEndereco() {
     return endereco;
   }

   public void setEndereco(String endereco) {
     this.endereco = endereco;
   }

   public double getSalario() {
     return salario;
   }

   public void setSalario(double salario) {
     this.salario = salario;
   }

   public String getCpf() {
     return cpf;
   }
 }
