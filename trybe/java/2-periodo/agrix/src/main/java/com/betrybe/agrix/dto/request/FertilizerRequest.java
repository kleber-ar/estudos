package com.betrybe.agrix.dto.request;

import jakarta.validation.constraints.NotBlank;

/**
 * DTO de criação de fertilizante.
 */
public class FertilizerRequest {

  @NotBlank
  private String name;

  @NotBlank
  private String brand;

  @NotBlank
  private String composition;

  public FertilizerRequest() {
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getComposition() {
    return composition;
  }

  public void setComposition(String composition) {
    this.composition = composition;
  }
}
