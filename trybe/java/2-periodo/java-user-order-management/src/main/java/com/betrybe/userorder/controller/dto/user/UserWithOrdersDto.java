package com.betrybe.userorder.controller.dto.user;

import com.betrybe.userorder.controller.dto.order.OrderDto;
import com.betrybe.userorder.entity.User;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record UserWithOrdersDto(
    Long id,
    String name,
    String email,
    LocalDate birthday,
    LocalDateTime createdDate,
    List<OrderDto> orders
) {

  public static UserWithOrdersDto fromEntity(User user) {
    return new UserWithOrdersDto(
        user.getId(),
        user.getName(),
        user.getEmail(),
        user.getBirthday(),
        user.getCreatedDate(),
        user.getOrders().stream().map(OrderDto::fromEntity).toList()
    );
  }

}
