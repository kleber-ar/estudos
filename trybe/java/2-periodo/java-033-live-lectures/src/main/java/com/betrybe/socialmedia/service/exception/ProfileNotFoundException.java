package com.betrybe.socialmedia.service.exception;

public class ProfileNotFoundException extends NotFoundException {

  public ProfileNotFoundException() {
    super("Profile not found");
  }
}
