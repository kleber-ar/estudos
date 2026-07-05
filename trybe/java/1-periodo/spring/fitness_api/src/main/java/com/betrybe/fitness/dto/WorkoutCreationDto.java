package com.betrybe.fitness.dto;

/**
 * Criação do DTO.
 */
public record WorkoutCreationDto(
    String name,
    Integer repetitions,
    String secretTechnique
) {}
