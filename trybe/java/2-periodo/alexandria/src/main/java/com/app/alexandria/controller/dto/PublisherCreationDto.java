package com.app.alexandria.controller.dto;

import com.app.alexandria.entity.Publisher;

public record PublisherCreationDto(String name, String address) {

  public Publisher toEntity() {
    return new Publisher(name, address);
  }
}
