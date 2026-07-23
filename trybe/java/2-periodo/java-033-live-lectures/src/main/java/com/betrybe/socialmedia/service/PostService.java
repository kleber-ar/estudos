package com.betrybe.socialmedia.service;

import com.betrybe.socialmedia.entity.Post;
import com.betrybe.socialmedia.entity.Tag;
import com.betrybe.socialmedia.entity.User;
import com.betrybe.socialmedia.repository.PostRepository;
import com.betrybe.socialmedia.service.exception.PostNotFoundException;
import com.betrybe.socialmedia.service.exception.TagNotFoundException;
import com.betrybe.socialmedia.service.exception.UserNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

  private final PostRepository postRepository;
  private final UserService userService;
  private final TagService tagService;

  @Autowired
  public PostService(PostRepository postRepository, UserService userService, TagService tagService) {
    this.postRepository = postRepository;
    this.userService = userService;
    this.tagService = tagService;
  }

  public Post findById(long id) throws PostNotFoundException {
    return postRepository.findById(id)
        .orElseThrow(PostNotFoundException::new);
  }

  public List<Post> findAll() {
    return postRepository.findAll();
  }

  public Post create(Post post) {
    return postRepository.save(post);
  }

  public Post createPost(Post post, long id) throws UserNotFoundException {
    User user = userService.findById(id);

    post.setUser(user);

    return postRepository.save(post);
  }

  public Post associatePostAndTag(long postId, long tagId)
      throws PostNotFoundException, TagNotFoundException {
    Post post = findById(postId);
    Tag tag = tagService.findById(tagId);

    post.getTags().add(tag);
    return postRepository.save(post);
  }
}