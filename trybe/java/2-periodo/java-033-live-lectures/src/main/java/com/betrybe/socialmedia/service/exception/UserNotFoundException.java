package com.betrybe.socialmedia.service.exception;

public class UserNotFoundException extends NotFoundException {

  public UserNotFoundException() {
    super("User not found");
  }
}
