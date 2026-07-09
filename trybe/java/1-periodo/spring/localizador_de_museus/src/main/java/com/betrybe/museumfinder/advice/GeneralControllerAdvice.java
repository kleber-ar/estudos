package com.betrybe.museumfinder.advice;

import com.betrybe.museumfinder.exception.InvalidCoordinateException;
import com.betrybe.museumfinder.exception.MuseumNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Classe responsável pelo tratamento global de exceções.
 */
@ControllerAdvice
public class GeneralControllerAdvice {

  @ExceptionHandler(InvalidCoordinateException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public String handleInvalidCoordinateException(InvalidCoordinateException exception) {
    return "Coordenada inválida!";
  }

  @ExceptionHandler(MuseumNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ResponseBody
  public String handleMuseumNotFoundException(MuseumNotFoundException exception) {
    return "Museu não encontrado!";
  }

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public String handleException(Exception exception) {
    return "Erro interno!";
  }
}
