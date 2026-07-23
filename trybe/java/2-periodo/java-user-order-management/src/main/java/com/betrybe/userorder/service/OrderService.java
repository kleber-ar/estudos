package com.betrybe.userorder.service;

import com.betrybe.userorder.entity.Order;
import com.betrybe.userorder.entity.User;
import com.betrybe.userorder.repository.OrderRepository;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

  private final OrderRepository orderRepository;
  private final UserService userService;

  @Autowired
  public OrderService(OrderRepository orderRepository, UserService userService) {
    this.orderRepository = orderRepository;
    this.userService = userService;
  }

  public List<Order> getAllOrders() {
    return orderRepository.findAll();
  }

  public Order createOrder(Order order, long userId) {
    User findUser = userService.getUserById(userId);
    LocalDate currentDate = LocalDate.now();

    order.setUser(findUser);
    order.setOrderDate(currentDate);

    return orderRepository.save(order);
  }

  public List<Order> getOrdersLastMonth() {
    List<Order> orders = getAllOrders();
    long ONE_MONTH = 30;

    return orders.stream()
        .filter(order -> order.getOrderDate().isAfter(LocalDate.now().minusDays(ONE_MONTH)))
        .toList();
  }
}

