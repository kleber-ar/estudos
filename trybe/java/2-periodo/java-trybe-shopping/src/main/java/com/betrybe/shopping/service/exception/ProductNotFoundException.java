package com.betrybe.shopping.service.exception;

public class ProductNotFoundException extends  NotFoundException {
  public ProductNotFoundException() {
    super("Produto não encontrado!");
  }
}
