package com.betrybe.userorder.controller.dto.order;

import com.betrybe.userorder.entity.Order;
import java.time.LocalDate;

public record OrderCreateDto(
    String description,
    LocalDate orderDate
) {

  public Order toEntity() {
    Order order = new Order();

    order.setDescription(description);
    order.setOrderDate(orderDate);

    return order;
  }

}
