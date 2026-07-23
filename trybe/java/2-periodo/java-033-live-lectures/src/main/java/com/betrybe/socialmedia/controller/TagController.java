package com.betrybe.socialmedia.controller;

import com.betrybe.socialmedia.controller.dto.TagDTO;
import com.betrybe.socialmedia.entity.Tag;
import com.betrybe.socialmedia.service.TagService;
import com.betrybe.socialmedia.service.exception.TagNotFoundException;
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
@RequestMapping("/tags")
public class TagController {

  private final TagService tagService;

  @Autowired
  public TagController(TagService tagService) {
    this.tagService = tagService;
  }

  @GetMapping
  public List<TagDTO> findAll() {
    List<Tag> tags = tagService.findAll();

    return tags.stream()
        .map(TagDTO::fromEntity)
        .toList();
  }

  @GetMapping("/{id}")
  public TagDTO findById(@PathVariable long id) throws TagNotFoundException {
    Tag tag = tagService.findById(id);
    return TagDTO.fromEntity(tag);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public TagDTO save(@RequestBody TagDTO tag) {
    Tag savedTag = tagService.create(tag.toEntity());
    return TagDTO.fromEntity(savedTag);
  }
}
