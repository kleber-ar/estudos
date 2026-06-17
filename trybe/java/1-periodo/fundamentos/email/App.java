public class App {
    public static void main(String[] args) {
      /*
       Informaçoes do texto separados por ponto e vírgula:
       1 - De quem é o e-mail
       2 - Para quem o -mail será endereçado
       3 - Se haverá cópia oculta do e-mail para o diretor  da empresa - se for vogal
       4 - Assunto do e-mail
       5 - A mensagem
       */

      String info = "noreply@mycompany.com;onetax@company.com;a;De {de} para {para};Bom dia, amigo!";
      Email email = new Email();
      email.enviar(info);
    }

}
