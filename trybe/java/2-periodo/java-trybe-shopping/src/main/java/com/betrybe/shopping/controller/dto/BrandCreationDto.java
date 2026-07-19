package com.betrybe.shopping.controller.dto;

import com.betrybe.shopping.entity.Brand;

public record BrandCreationDto(String name, String manufacturer) {
  public Brand toEntity() {
    Brand brand = new Brand();
    brand.setName(name);
    brand.setManufacturer(manufacturer);

    return brand;
  }
}
