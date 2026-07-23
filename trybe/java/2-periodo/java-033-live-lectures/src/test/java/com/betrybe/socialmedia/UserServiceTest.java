package com.betrybe.socialmedia;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;

import com.betrybe.socialmedia.entity.User;
import com.betrybe.socialmedia.repository.UserRepository;
import com.betrybe.socialmedia.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTest {

  @Autowired
  UserService userService;

  @MockBean
  UserRepository userRepository;

  @Test
  public void testUserCreation() {
    // Arrange
    User user = new User();
    user.setName("User Name Teste");
    user.setEmail("username@email.test.com");

    // Mock expected - inicio
    User userExpected = new User();
    userExpected.setName("User Name Teste");
    userExpected.setEmail("username@email.test.com");
    userExpected.setId(4L);

    Mockito.when(
        userRepository.save(any())
    ).thenReturn(userExpected);
    // Mock expected - fim

    // Act
    User userSaved = userService.create(user);

    // Assert
//    assertNotNull(userSaved.getId());
    assertEquals(userExpected.getId(), userSaved.getId());
    assertEquals(userExpected.getName(), userSaved.getName());
    assertEquals(userExpected.getEmail(), userSaved.getEmail());
  }
}