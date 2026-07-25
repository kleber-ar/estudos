package com.betrybe.trybrecho.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
@EntityListeners(AuditingEntityListener.class)
@Audited
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private Double price;

  @CreatedDate
  @JsonProperty("created_date")
  private LocalDate createDate;

  @LastModifiedDate
  @JsonProperty("last_modified_date")
  private LocalDate lastModifiedDate;

  public Product() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public LocalDate getCreateDate() {
    return createDate;
  }

  public void setCreateDate(LocalDate createDate) {
    this.createDate = LocalDate.from(Instant.now());
  }

  public LocalDate getLastModifiedDate() {
    return lastModifiedDate;
  }

  public void setLastModifiedDate(LocalDate lastModifiedDate) {
    this.lastModifiedDate = LocalDate.from(Instant.now());
  }
}
