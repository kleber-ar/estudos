import java.util.Scanner;

public class Email {

  public void enviar(String email) {
      String[] campos = email.split(";");

      String de = campos[0];
      String para = campos[1];
      String copiaOcultaPara = campos[2];
      String assunto = campos[3];
      String mensagem = campos[4];

      //Copia oculta config
      if ("AEIOU".indexOf(copiaOcultaPara.toUpperCase()) >= 0) {
        copiaOcultaPara = "diretor@mycompany.com";
      } else {
        copiaOcultaPara = "";
      }

      assunto = assunto.replace("{de}", de);
      assunto = assunto.replace("{para}", para);

      //Print da saida
      System.out.println(
          "De: "+ de + "\n"
            + "Para: " + para + "\n"
            + "CC: " + copiaOcultaPara + "\n"
            + "Assunto: " + assunto + "\n"
            + "Mensagem: " + mensagem + "\n"
          );
  }
}
