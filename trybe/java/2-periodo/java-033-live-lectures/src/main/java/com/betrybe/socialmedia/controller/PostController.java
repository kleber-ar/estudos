package com.betrybe.socialmedia.controller;

import com.betrybe.socialmedia.controller.dto.PostDTO;
import com.betrybe.socialmedia.controller.dto.PostWithTagsDTO;
import com.betrybe.socialmedia.controller.dto.TagDTO;
import com.betrybe.socialmedia.entity.Post;
import com.betrybe.socialmedia.entity.Tag;
import com.betrybe.socialmedia.service.PostService;
import com.betrybe.socialmedia.service.exception.PostNotFoundException;
import com.betrybe.socialmedia.service.exception.TagNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class PostController {

  private final PostService postService;

  @Autowired
  public PostController(PostService postService) {
    this.postService = postService;
  }

  @GetMapping
  public List<PostDTO> findAll() {
    List<Post> posts = postService.findAll();

    return posts.stream()
        .map(PostDTO::fromEntity)
        .toList();
  }

  @GetMapping("/{id}")
  public PostDTO findById(@PathVariable("id") long id) throws PostNotFoundException {
    Post post = postService.findById(id);
    return PostDTO.fromEntity(post);
  }

  // Não é IDEMPOTENTE
  @PostMapping("/{postId}/tags/{tagId}")
  public PostWithTagsDTO associatePostAndTag(@PathVariable long postId, @PathVariable long tagId)
      throws TagNotFoundException, PostNotFoundException {

    Post post = postService.associatePostAndTag(postId, tagId);

    return PostWithTagsDTO.fromEntity(post);
  }

  @GetMapping("/{postId}/tags")
  public List<TagDTO> getPostTags(@PathVariable long postId)
      throws TagNotFoundException, PostNotFoundException {
    Post post = postService.findById(postId);
    List<Tag> tags = post.getTags();

    return tags.stream()
        .map(TagDTO::fromEntity)
        .toList();
  }
}
