package com.app.alexandria.controller.dto;

import com.app.alexandria.entity.BookDetail;

public record BookDetailCreationDto(
    String summary,
    Integer pageCount,
    String year,
    String isbn) {

  public BookDetail toEntity() {
    return new BookDetail(summary, pageCount, year, isbn);
  }
}
