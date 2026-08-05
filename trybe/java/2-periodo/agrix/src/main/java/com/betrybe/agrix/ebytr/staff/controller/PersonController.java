package com.betrybe.agrix.ebytr.staff.controller;

import com.betrybe.agrix.ebytr.staff.dto.request.PersonRequest;
import com.betrybe.agrix.ebytr.staff.dto.response.PersonResponse;
import com.betrybe.agrix.ebytr.staff.service.PersonService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller responsável pelas operações de pessoas.
 */
@RestController
@RequestMapping("/persons")
public class PersonController {

  private final PersonService service;

  public PersonController(PersonService service) {
    this.service = service;
  }

  /**
   * Converte em entidade.
   *
   * @param request requesição
   * @return o retorno
   */
  @PostMapping
  public ResponseEntity<PersonResponse> create(
      @RequestBody @Valid PersonRequest request) {

    PersonResponse response = service.create(request);

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(response);
  }
}
