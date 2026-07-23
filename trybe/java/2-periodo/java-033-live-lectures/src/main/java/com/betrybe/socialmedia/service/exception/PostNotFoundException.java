package com.betrybe.socialmedia.service.exception;

public class PostNotFoundException extends NotFoundException {

  public PostNotFoundException() {
    super("Post not found");
  }
}
