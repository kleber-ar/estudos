package com.betrybe.museumfinder.exception;

/**
 * Exceção lançada quando as coordenadas informadas são inválidas.
 */
public class InvalidCoordinateException extends RuntimeException {

  public InvalidCoordinateException() {
    super("Invalid coordinate");
  }

  public InvalidCoordinateException(String message) {
    super(message);
  }
}
