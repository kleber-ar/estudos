package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Webinar;
import java.time.LocalDateTime;

public record WebinarDto(
    Long id,
    String title,
    String url,
    LocalDateTime dateTime) {

  public static WebinarDto fromEntity(Webinar webinar) {
    return new WebinarDto(
        webinar.getId(),
        webinar.getTitle(),
        webinar.getUrl(),
        webinar.getDateTime()
    );
  }
}
