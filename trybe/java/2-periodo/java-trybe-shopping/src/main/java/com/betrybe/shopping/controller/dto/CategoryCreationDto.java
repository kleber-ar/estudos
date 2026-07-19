package com.betrybe.shopping.controller.dto;

import com.betrybe.shopping.entity.Category;

public record CategoryCreationDto(String name) {

  public Category toEntity() {
     Category category = new Category();
     category.setName(name);

     return category;
  }
}
