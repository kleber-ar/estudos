package com.betrybe.webinar.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "webinars")
public class Webinar {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String url;
  private LocalDateTime dateTime;

  public Webinar() {
  }

  public Webinar(Long id, String title, String url, LocalDateTime dateTime) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.dateTime = dateTime;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public LocalDateTime getDateTime() {
    return dateTime;
  }

  public void setDateTime(LocalDateTime dateTime) {
    this.dateTime = dateTime;
  }
}
