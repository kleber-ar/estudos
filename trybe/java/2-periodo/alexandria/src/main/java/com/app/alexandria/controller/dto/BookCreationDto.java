package com.app.alexandria.controller.dto;

import com.app.alexandria.entity.Book;

public record BookCreationDto(String title, String genre) {

  public Book toEntity() {
    return new Book(title, genre);
  }

}
