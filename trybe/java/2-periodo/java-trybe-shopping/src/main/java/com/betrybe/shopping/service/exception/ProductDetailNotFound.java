package com.betrybe.shopping.service.exception;

public class ProductDetailNotFound extends NotFoundException {

  public ProductDetailNotFound() {
    super("Detalhe de produto não encontrado!");
  }
}
