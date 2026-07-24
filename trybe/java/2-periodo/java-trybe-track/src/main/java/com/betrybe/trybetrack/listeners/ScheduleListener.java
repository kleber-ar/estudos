@Component
public class ScheduleListener {

  private EmailService emailService;

  @Autowired
  public ScheduleListener(EmailService emailService) {
    this.emailService = emailService;
  }

  @PostUpdate
  public void postUpdate(Schedule schedule) {
    String message = String.format("O horário da linha %s foi alterada para %s às %s",
        schedule.getBusLine().getCode(),
        schedule.getDepartureDate().toString(),
        schedule.getDepartureTime().toString());

    emailService.sendEmail("brunolopesjn@gmail.com", "Alteração de data", message);
  }
}
