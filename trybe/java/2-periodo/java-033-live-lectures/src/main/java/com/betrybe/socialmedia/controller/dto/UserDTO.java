package com.betrybe.socialmedia.controller.dto;

import com.betrybe.socialmedia.entity.User;

public record UserDTO(
    Long id,
    String name,
    String email
) {

  public static UserDTO fromEntity(User user) {
    return new UserDTO(
        user.getId(),
        user.getName(),
        user.getEmail()
    );
  }

  public User toEntity() {
    User user = new User();
    user.setName(name);
    user.setEmail(email);
    return user;
  }

}
