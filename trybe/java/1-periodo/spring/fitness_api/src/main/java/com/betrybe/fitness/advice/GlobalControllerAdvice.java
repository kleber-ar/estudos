@RestControllerAdvice
public class GlobalControllerAdvice {

  @ExceptionHandler
  public ResponseEntity<String> handleNotFoundException(WorkoutNotFoundException e) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Treino não encontrado!");
  }

  @ExceptionHandler({
      RuntimeException.class,
      Exception.class
  })
  public ResponseEntity<String> handleInternalServerErrorException(Exception e) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
  }
}
