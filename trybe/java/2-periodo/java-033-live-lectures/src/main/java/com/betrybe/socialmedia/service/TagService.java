package com.betrybe.socialmedia.service;

import com.betrybe.socialmedia.entity.Tag;
import com.betrybe.socialmedia.repository.TagRepository;
import com.betrybe.socialmedia.service.exception.TagNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TagService {

  private final TagRepository tagRepository;

  @Autowired
  public TagService(TagRepository tagRepository) {
    this.tagRepository = tagRepository;
  }

  public Tag findById(long id) throws TagNotFoundException {
    return tagRepository.findById(id)
        .orElseThrow(TagNotFoundException::new);
  }

  public List<Tag> findAll() {
    return tagRepository.findAll();
  }

  public Tag create(Tag tag) {
    return tagRepository.save(tag);
  }
}
