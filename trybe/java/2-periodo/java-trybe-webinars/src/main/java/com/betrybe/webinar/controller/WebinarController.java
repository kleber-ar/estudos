package com.betrybe.webinar.controller;

import com.betrybe.webinar.controller.dto.WebinarCreationDto;
import com.betrybe.webinar.controller.dto.WebinarDto;
import com.betrybe.webinar.entity.Person;
import com.betrybe.webinar.entity.Webinar;
import com.betrybe.webinar.service.WebinarService;
import com.betrybe.webinar.service.exception.WebinarNotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
@RequestMapping("/webinars")
public class WebinarController {

  private final WebinarService webinarService;

  @Autowired
  public WebinarController(WebinarService webinarService) {
    this.webinarService = webinarService;
  }

  @GetMapping
  @Secured({ "VIEWER", "USER", "ADMIN" })
  public List<WebinarDto> getAllWebinars() {
    return webinarService.getAll().stream()
        .map(WebinarDto::fromEntity)
        .collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  public WebinarDto getWebinarById(@PathVariable Long id) throws WebinarNotFoundException {
    return WebinarDto.fromEntity(
        webinarService.getById(id));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  @PreAuthorize("#person.age >= 18") // <-- Adicione esta linha
  public WebinarDto createWebinar(@RequestBody WebinarCreationDto webinarDto, @AuthenticationPrincipal Person person) {
    Webinar savedWebinar = webinarService.create(
        webinarDto.toEntity());

    return WebinarDto.fromEntity(savedWebinar);
  }

  @DeleteMapping("/{id}")
  public WebinarDto deleteWebinar(@PathVariable Long id) throws WebinarNotFoundException {
    return WebinarDto.fromEntity(
        webinarService.deleteById(id));
  }
}
