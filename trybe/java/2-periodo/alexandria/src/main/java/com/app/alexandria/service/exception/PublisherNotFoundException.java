package com.app.alexandria.service.exception;

public class PublisherNotFoundException extends NotFoundException {

  public PublisherNotFoundException() {
    super("Editora não encontrada!");
  }
}
