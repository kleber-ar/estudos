package com.betrybe.fitness.service;

import com.betrybe.fitness.database.FakeFitnessDatabase;
import com.betrybe.fitness.dto.WorkoutCreationDto;
import com.betrybe.fitness.dto.WorkoutDto;
import com.betrybe.fitness.model.Workout;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * service de fitness.
 */
@Service
public class FitnessService implements FitnessServiceInterface {
  FakeFitnessDatabase database;

  @Autowired
  public FitnessService(FakeFitnessDatabase database) {
    this.database = database;
  }

  @Override
  public WorkoutDto saveWorkout(WorkoutCreationDto newWorkoutDto) {
    // Criamos um novo objeto Workout a partir do DTO recebido
    Workout newWorkout = new Workout();
    newWorkout.setName(newWorkoutDto.name());
    newWorkout.setRepetitions(newWorkoutDto.repetitions());
    newWorkout.setSecretTechnique(newWorkoutDto.secretTechnique());

    // Salvamos o objeto no "banco".
    // O método vai retornar um novo objeto, que foi salvo.
    Workout workout = database.saveWorkout(newWorkout);

    // Convertemos o objeto retornado para WorkoutDto
    return new WorkoutDto(
        workout.getId(),
        workout.getName(),
        workout.getRepetitions()
    );
  }

  @Override
  public Optional<WorkoutDto> getWorkout(Long id) {
    // Buscamos o treino no banco utilizando o ID
    Optional<Workout> workoutOptional = database.getWorkout(id);

    // Verificamos de o resultado está vazio.
    // Se sim, também retornamos um resultado vazio.
    if (workoutOptional.isEmpty()) {
      throw new WorkoutNotFoundException();
    }

    // Se o resultado não está vazio, extraímos o objeto original.
    Workout workout = workoutOptional.get();
    
    // Fazemos a conversão do modelo para o DTO
    WorkoutDto workoutDto = new WorkoutDto(
        workout.getId(),
        workout.getName(),
        workout.getRepetitions()
    );

    // Retornamos um objeto Optional do DTO
    return Optional.of(workoutDto);
  }

  @Override
  public List<WorkoutDto> getAllWorkouts() {
    return database.getAllWorkouts()
    .stream()
    .map(workout -> new WorkoutDto(
        workout.getId(),
        workout.getName(),
        workout.getRepetitions()
    )).toList();
  }
}
