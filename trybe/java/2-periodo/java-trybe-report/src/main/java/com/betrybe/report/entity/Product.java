package com.betrybe.report.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Name is Required")
  private String name;

  @NotNull(message = "Manufacture date is Required")
  @PastOrPresent(message = "Manufacture date must be in the Past or Present")
  private LocalDate manufactureDate;

  @NotNull(message = "Expiration date is Required")
  @Future(message = "Expiration date must be in the Future")
  private LocalDate expirationDate;
}
