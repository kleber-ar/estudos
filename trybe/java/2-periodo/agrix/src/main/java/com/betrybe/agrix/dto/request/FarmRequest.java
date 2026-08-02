package com.betrybe.agrix.dto.request;

public class FarmRequest {
  private String name;
  private Double size;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Double getSize() {
    return size;
  }

  public void setSize(Double size) {
    this.size = size;
  }
}
