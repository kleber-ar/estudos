package com.betrybe.socialmedia.controller.dto;

import com.betrybe.socialmedia.entity.Tag;

public record TagDTO(Long id, String name) {

  public static TagDTO fromEntity(Tag tag) {
    return new TagDTO(tag.getId(), tag.getName());
  }

  public Tag toEntity() {
    Tag tag = new Tag();
    tag.setName(name);
    return tag;
  }
}
