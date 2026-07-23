package com.betrybe.socialmedia.controller.dto;

import com.betrybe.socialmedia.entity.Post;

public record PostDTO(Long id, String title, String content) {

  public static PostDTO fromEntity(Post post) {
    return new PostDTO(
        post.getId(),
        post.getTitle(),
        post.getContent()
    );
  }

  public Post toEntity() {
    Post post = new Post();
    post.setTitle(title);
    post.setContent(content);
    return post;
  }
}
