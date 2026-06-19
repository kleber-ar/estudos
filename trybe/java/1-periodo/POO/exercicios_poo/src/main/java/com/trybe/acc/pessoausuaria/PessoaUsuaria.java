package com.trybe.acc.pessoausuaria;

 public class PessoaUsuaria extends Pessoa {

   public PessoaUsuaria(String nome, String sobrenome) {
     this.nome = nome;
     this.sobrenome = sobrenome;
   }

   /**
    * Método para pegar o nome e sobrenome do usuário.
    *
    */
   public String getPessoaUsuaria() {
     if (nome != null && nome != "" && sobrenome != null && sobrenome != "") {
       return nome + "." + sobrenome;
     } else {
       return "Pessoa usuária inválida";
     }
   }
 }
