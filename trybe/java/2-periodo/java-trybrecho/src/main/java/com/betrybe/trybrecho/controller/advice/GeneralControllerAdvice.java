package com.betrybe.trybrecho.controller.advice;

import com.betrybe.trybrecho.service.exception.ProductNotFoundException;
import com.betrybe.trybrecho.service.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GeneralControllerAdvice {

  @ExceptionHandler(NotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String handleNotFound(NotFoundException e) {
    return e.getMessage();
  }
}
