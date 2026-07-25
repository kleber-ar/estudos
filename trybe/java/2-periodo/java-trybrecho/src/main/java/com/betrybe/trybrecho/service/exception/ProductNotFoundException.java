package com.betrybe.trybrecho.service.exception;

/**
 * The type Product not found exception.
 */
public class ProductNotFoundException extends
    NotFoundException {

  public ProductNotFoundException() {
    super("Produto não encontrado!");
  }
}
