
package com.betrybe.fitness.controller;

import com.betrybe.fitness.dto.WorkoutDto;
import com.betrybe.fitness.service.FitnessServiceInterface;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * controller de fitness.
 */ 
@RestController
@RequestMapping("/fitness")
public class FitnessController implements FitnessControllerInterface {
  FitnessServiceInterface service;

  @Autowired
  public FitnessController(FitnessServiceInterface service) {
    this.service = service;
  }

  @GetMapping
  public String getRoot() {
    return "Boas vindas à API de Fitness!";
  }

  /**
   * Workout por id.
   */ 
  @GetMapping("/workouts/{id}")
  public ResponseEntity<WorkoutDto> getWorkout(@PathVariable Long id) {
    // Consultamos a camada de serviço e 
    // recebemos um Optional do DTO como resposta
    Optional<WorkoutDto> workoutDto = service.getWorkout(id);

    // Se o resultado estiver vazio, retornamos status 404 (não encontrado)
    if (workoutDto.isEmpty()) {
      return ResponseEntity.notFound().build();
    }

    // Se o resultado não for vazio, retornamos status 200 (ok)
    // com o DTO no corpo da resposta
    return ResponseEntity.ok(workoutDto.get());
  }
}
