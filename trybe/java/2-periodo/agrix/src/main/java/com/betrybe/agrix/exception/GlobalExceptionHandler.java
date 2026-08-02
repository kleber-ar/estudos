package com.betrybe.agrix.exception;

import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Tratamento global de exceções.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

  /**
   * Exception errors.
   *
   * @param exception a execeção
   * @return a mensagem de error
   */
  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<Map<String, String>> handleNotFound(
      NotFoundException exception) {

    return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(Map.of("message", exception.getMessage()));
  }
}
