package com.betrybe.userorder.service.exception;

public abstract class NotFoundException extends RuntimeException {

  public NotFoundException(String message) {
    super(message);
  }
}
