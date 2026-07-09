package com.betrybe.museumfinder.exception;

/**
 * Exceção lançada quando nenhum museu é encontrado.
 */
public class MuseumNotFoundException extends RuntimeException {

  public MuseumNotFoundException() {
    super("Museum not found");
  }

  public MuseumNotFoundException(String message) {
    super(message);
  }
}
