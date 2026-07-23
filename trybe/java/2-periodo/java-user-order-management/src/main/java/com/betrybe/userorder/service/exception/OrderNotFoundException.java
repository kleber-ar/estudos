package com.betrybe.userorder.service.exception;

public class OrderNotFoundException extends NotFoundException {

  public OrderNotFoundException() {
    super("Order Not Found!");
  }
}
