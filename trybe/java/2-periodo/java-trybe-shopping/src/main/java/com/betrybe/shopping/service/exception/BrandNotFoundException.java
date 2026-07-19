package com.betrybe.shopping.service.exception;

public class BrandNotFoundException extends  RuntimeException {
  public BrandNotFoundException() {
    super("Marca não encontrado!");
  }
}
