package com.betrybe.agrix.controller;

import com.betrybe.agrix.dto.request.FertilizerRequest;
import com.betrybe.agrix.dto.response.FertilizerResponse;
import com.betrybe.agrix.service.FertilizerService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller de Fertilizer.
 */
@RestController
public class FertilizerController {

  private final FertilizerService service;

  public FertilizerController(FertilizerService service) {
    this.service = service;
  }

  /**
   * O get do fertilizer.
   *
   * @param request a request
   * @return a entidade
   */
  @PostMapping("/fertilizers")
  public ResponseEntity<FertilizerResponse> create(
      @RequestBody @Valid FertilizerRequest request) {

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(service.create(request));
  }

  /**
   * Lista todos os fertilizantes.
   *
   * @return lista de fertilizantes
   */
  @GetMapping("/fertilizers")
  public ResponseEntity<List<FertilizerResponse>> findAll() {

    return ResponseEntity.ok(service.findAll());
  }
}
