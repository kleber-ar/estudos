package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Person;

public record PersonCreationDto(
    String fullname,
    String email,
    String username,
    String password) {

  public Person toEntity() {
    return new Person(null, fullname, email, username, password);
  }
}
