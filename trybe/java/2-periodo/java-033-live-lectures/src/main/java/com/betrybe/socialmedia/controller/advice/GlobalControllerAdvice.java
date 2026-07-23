package com.betrybe.socialmedia.controller.advice;

import com.betrybe.socialmedia.service.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalControllerAdvice {

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<String> handleNotFound(NotFoundException exception) {
    return ResponseEntity
        .status(HttpStatus.NOT_FOUND)
        .body(
            exception.getMessage()
        );
  }
}
