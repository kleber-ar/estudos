package com.betrybe.userorder.controller;

import com.betrybe.userorder.controller.dto.order.OrderDto;
import com.betrybe.userorder.entity.Order;
import com.betrybe.userorder.service.OrderService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

  private final OrderService orderService;

  @Autowired
  public OrderController(OrderService orderService) {
    this.orderService = orderService;
  }

  @GetMapping
  public List<OrderDto> getAll() {
    List<Order> orders = orderService.getAllOrders();

    return orders.stream().map(OrderDto::fromEntity).toList();
  }

  @GetMapping("/lastMonth")
  public List<OrderDto> getOrdersLastMonth() {
    List<Order> orders = orderService.getOrdersLastMonth();

    return orders.stream().map(OrderDto::fromEntity).toList();
  }
}
