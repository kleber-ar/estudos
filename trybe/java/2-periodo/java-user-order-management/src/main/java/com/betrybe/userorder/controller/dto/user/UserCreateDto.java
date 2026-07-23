package com.betrybe.userorder.controller.dto.user;

import com.betrybe.userorder.entity.User;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record UserCreateDto(
    String name,
    String email,
    String password,
    String cpf,
    LocalDate birthday,
    LocalDateTime createdDate
) {

  public User toEntity() {
    User user = new User();
    user.setName(name);
    user.setEmail(email);
    user.setPassword(password);
    user.setCpf(cpf);
    user.setBirthday(birthday);
    user.setCreatedDate(createdDate);

    return user;
  }

}
