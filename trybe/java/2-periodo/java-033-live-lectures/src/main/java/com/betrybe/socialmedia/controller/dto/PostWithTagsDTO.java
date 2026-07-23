package com.betrybe.socialmedia.controller.dto;

import com.betrybe.socialmedia.entity.Post;
import java.util.List;

public record PostWithTagsDTO(Long id, String title, String content, List<TagDTO> tags) {
  public static PostWithTagsDTO fromEntity(Post post) {
    return new PostWithTagsDTO(
        post.getId(),
        post.getTitle(),
        post.getContent(),
        post.getTags().stream()
            .map(TagDTO::fromEntity)
            .toList()
    );
  }
}