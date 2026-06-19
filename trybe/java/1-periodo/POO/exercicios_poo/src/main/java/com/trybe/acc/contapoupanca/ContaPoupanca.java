package com.trybe.acc.contapoupanca;

 public class ContaPoupanca {
   // Atributos da classe ContaPoupanca
   String titularConta;
   double saldo;

   // Construtor da classe ContaPoupanca
   public ContaPoupanca(String nome, double valor) {
     titularConta = nome;
     saldo = valor;
   }

   // Métodos da classe ContaPoupanca
   public void depositar(double valor) {
     saldo = saldo + valor;
   }

   public void sacar(double valor) {
     saldo = saldo - valor;
   }

   public double mostrarSaldo() {
     return saldo;
   }

   public String mostrarTitularConta() {
     return titularConta;
   }
 }
