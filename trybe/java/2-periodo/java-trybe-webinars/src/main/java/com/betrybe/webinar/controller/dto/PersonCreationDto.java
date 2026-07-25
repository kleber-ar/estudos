package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Person;

public record PersonCreationDto(
    String fullname,
    String email) {

  public Person toEntity() {
    return new Person(null, fullname, email);
  }
}
