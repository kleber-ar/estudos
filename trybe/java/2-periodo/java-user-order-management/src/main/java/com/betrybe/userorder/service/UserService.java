package com.betrybe.userorder.service;

import com.betrybe.userorder.entity.User;
import com.betrybe.userorder.repository.UserRepository;
import com.betrybe.userorder.service.exception.UserNotFoundException;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User getUserById(long userId) {
    return userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
  }

  public User createUser(User user) {
    LocalDateTime currentDate = LocalDateTime.now();

    user.setCreatedDate(currentDate);

    return userRepository.save(user);
  }

}
