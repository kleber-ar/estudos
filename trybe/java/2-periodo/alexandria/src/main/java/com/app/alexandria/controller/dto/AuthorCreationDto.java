package com.app.alexandria.controller.dto;

import com.app.alexandria.entity.Author;

public record AuthorCreationDto(String name, String nationality) {

  public Author toEntity() {
    return new Author(name, nationality);
  }
}
