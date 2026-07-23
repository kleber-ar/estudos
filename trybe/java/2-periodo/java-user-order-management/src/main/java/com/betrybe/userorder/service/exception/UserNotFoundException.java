package com.betrybe.userorder.service.exception;

public class UserNotFoundException extends NotFoundException {

  public UserNotFoundException() {
    super("User Not Found!");
  }
}
