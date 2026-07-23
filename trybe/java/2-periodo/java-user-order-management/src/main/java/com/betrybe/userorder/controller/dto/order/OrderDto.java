package com.betrybe.userorder.controller.dto.order;

import com.betrybe.userorder.entity.Order;
import java.time.LocalDate;

public record OrderDto(
    Long id,
    String description,
    LocalDate orderDate
) {

  public static OrderDto fromEntity(Order order) {
    return new OrderDto(
        order.getId(),
        order.getDescription(),
        order.getOrderDate()
    );
  }

}
