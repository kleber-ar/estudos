package com.betrybe.userorder.controller;

import com.betrybe.userorder.controller.dto.order.OrderCreateDto;
import com.betrybe.userorder.controller.dto.order.OrderDto;
import com.betrybe.userorder.controller.dto.user.UserCreateDto;
import com.betrybe.userorder.controller.dto.user.UserDto;
import com.betrybe.userorder.controller.dto.user.UserWithOrdersDto;
import com.betrybe.userorder.entity.Order;
import com.betrybe.userorder.entity.User;
import com.betrybe.userorder.service.OrderService;
import com.betrybe.userorder.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

  private final UserService userService;
  private final OrderService orderService;

  @Autowired
  public UserController(UserService userService, OrderService orderService) {
    this.userService = userService;
    this.orderService = orderService;
  }

  @GetMapping
  public List<UserDto> getAll() {
    List<User> users = userService.getAllUsers();

    return users.stream().map(UserDto::fromEntity).toList();
  }

  @GetMapping("/{userId}")
  public UserWithOrdersDto getById(@PathVariable long userId) {
    User user = userService.getUserById(userId);

    return UserWithOrdersDto.fromEntity(user);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public UserDto createUser(@RequestBody UserCreateDto userCreate) {
    User newUser = userService.createUser(userCreate.toEntity());

    return UserDto.fromEntity(newUser);
  }

  @PostMapping("/{userId}/orders")
  @ResponseStatus(HttpStatus.CREATED)
  public OrderDto createOrder(
      @RequestBody OrderCreateDto orderCreate,
      @PathVariable long userId
  ) {
    Order order = orderService.createOrder(orderCreate.toEntity(), userId);

    return OrderDto.fromEntity(order);
  }
}
