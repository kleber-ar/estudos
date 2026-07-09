package com.betrybe.museumfinder.controller;

import com.betrybe.museumfinder.dto.MuseumCreationDto;
import com.betrybe.museumfinder.dto.MuseumDto;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.MuseumServiceInterface;
import com.betrybe.museumfinder.util.ModelDtoConverter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller responsável pelos endpoints de museus.
 */
@RestController
@RequestMapping("/museums")
public class MuseumController {

  private final MuseumServiceInterface museumService;

  public MuseumController(MuseumServiceInterface museumService) {
    this.museumService = museumService;
  }

  /**
   * CreateMuseum.
   */
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public MuseumDto createMuseum(@RequestBody MuseumCreationDto museumCreationDto) {

    Museum museum = ModelDtoConverter.dtoToModel(museumCreationDto);

    Museum createdMuseum = museumService.createMuseum(museum);

    return ModelDtoConverter.modelToDto(createdMuseum);
  }
}
