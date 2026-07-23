package com.betrybe.userorder.controller.dto.user;

import com.betrybe.userorder.entity.User;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record UserDto(
    Long id,
    String name,
    String email,
    LocalDate birthday,
    LocalDateTime createdDate
) {

  public static UserDto fromEntity(User user) {
    return new UserDto(
        user.getId(),
        user.getName(),
        user.getEmail(),
        user.getBirthday(),
        user.getCreatedDate()
    );
  }

}
