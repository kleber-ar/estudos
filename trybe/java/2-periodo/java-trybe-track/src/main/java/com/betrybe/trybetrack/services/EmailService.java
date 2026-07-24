package com.betrybe.trybetrack.services;

@Service
public class EmailService {

  private final String username = "<seu_endereço_email_gmail>";
  private final String password = "<senha_de_aplicação>";

  public void sendEmail(String to, String subject, String message) {

    Properties props = new Properties();
    props.put("mail.smtp.auth", true);
    props.put("mail.smtp.starttls.enable", true);
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.port", 587);

    Session session = Session.getInstance(props,
        new Authenticator() {
          @Override
          protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(username, password);
          }
        });

    try {

      Message mimeMessage = new MimeMessage(session);
      mimeMessage.setFrom(new InternetAddress(username));
      mimeMessage.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
      mimeMessage.setSubject(subject);
      mimeMessage.setText(message);

      Transport.send(mimeMessage);
      System.out.println("Email enviado com sucesso!");

    } catch (MessagingException e) {
      throw new RuntimeException(e);
    }
  }

}
