package com.betrybe.shopping.controller.dto;

import com.betrybe.shopping.entity.ProductDetail;

public record ProductDetailCreationDto(Integer availableStock, Double unitPrice) {
  public ProductDetail toEntity() {
    ProductDetail productDetail = new ProductDetail();
    productDetail.setAvailableStock(availableStock);
    productDetail.setUnitPrice(unitPrice);
    return productDetail;
  }
}
