package com.betrybe.shopping.controller.dto;

import com.betrybe.shopping.entity.Product;

public record ProductCreationDto(
    String name,
    String description,
    long brandId) {

  public Product toEntityWithoutBrand() {
    return Product.builder()
        .name(name)
        .description(description)
        .build();
  }
}
