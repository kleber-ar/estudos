package com.betrybe.socialmedia.service.exception;

public class TagNotFoundException extends NotFoundException {

  public TagNotFoundException() {
    super("Tag not found");
  }
}
