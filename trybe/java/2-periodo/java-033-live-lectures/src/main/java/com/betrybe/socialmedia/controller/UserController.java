package com.betrybe.socialmedia.controller;

import com.betrybe.socialmedia.controller.dto.PostDTO;
import com.betrybe.socialmedia.controller.dto.ProfileDTO;
import com.betrybe.socialmedia.controller.dto.UserDTO;
import com.betrybe.socialmedia.entity.Post;
import com.betrybe.socialmedia.entity.Profile;
import com.betrybe.socialmedia.entity.User;
import com.betrybe.socialmedia.service.PostService;
import com.betrybe.socialmedia.service.UserService;
import com.betrybe.socialmedia.service.exception.ProfileNotFoundException;
import com.betrybe.socialmedia.service.exception.UserNotFoundException;
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
  private final PostService postService;

  @Autowired
  public UserController(UserService userService, PostService postService) {
    this.userService = userService;
    this.postService = postService;
  }

  @GetMapping
  public List<UserDTO> findAll() {
    List<User> users = userService.findAll();

    return users.stream()
        .map(UserDTO::fromEntity)
        .toList();
  }

  @GetMapping("/{id}")
  public UserDTO findById(@PathVariable("id") long id) throws UserNotFoundException {
    User user = userService.findById(id);
    return UserDTO.fromEntity(user);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public UserDTO save(@RequestBody UserDTO user) {
    User savedUser = userService.create(user.toEntity());
    return UserDTO.fromEntity(savedUser);
  }

  @PostMapping("/{userId}/profile")
  @ResponseStatus(HttpStatus.CREATED)
  public ProfileDTO createUserProfile(
      @RequestBody ProfileDTO profile,
      @PathVariable("userId") long id) throws UserNotFoundException {

    Profile savedProfile = userService.createUserProfile(profile.toEntity(), id);

    return ProfileDTO.fromEntity(savedProfile);
  }

  @GetMapping("/{userId}/profile")
  public ProfileDTO getUserProfile(@PathVariable("userId") long id)
      throws UserNotFoundException, ProfileNotFoundException {
    Profile profile = userService.getUserProfile(id);

    return ProfileDTO.fromEntity(profile);
  }

  @PostMapping("/{userId}/posts")
  @ResponseStatus(HttpStatus.CREATED)
  public PostDTO createPost(@RequestBody PostDTO post, @PathVariable("userId") long id)
      throws UserNotFoundException {

    Post savedPost = postService.createPost(post.toEntity(), id);
    return PostDTO.fromEntity(savedPost);
  }
}
