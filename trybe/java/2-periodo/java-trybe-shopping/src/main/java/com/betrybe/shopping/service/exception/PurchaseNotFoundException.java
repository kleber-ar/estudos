package com.betrybe.shopping.service.exception;

public class PurchaseNotFoundException extends  NotFoundException {
  public PurchaseNotFoundException() {
    super("Compra não encontrado!");
  }
}
