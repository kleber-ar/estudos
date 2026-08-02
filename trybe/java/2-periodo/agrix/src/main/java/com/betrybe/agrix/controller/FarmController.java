package com.betrybe.agrix.controller;

import com.betrybe.agrix.dto.request.FarmRequest;
import com.betrybe.agrix.dto.response.FarmResponse;
import com.betrybe.agrix.service.FarmService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * FarmController.
 */
@RestController
@RequestMapping("/farms")
public class FarmController {

  private final FarmService service;

  public FarmController(FarmService service) {
    this.service = service;
  }

  /**
   * Poste mappin para a rota.
   *
   * @param request o request
   * @return a entidade
   */
  @PostMapping
  public ResponseEntity<FarmResponse> createFarm(
      @RequestBody @Valid FarmRequest request) {

    FarmResponse response = service.create(request);

    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  @GetMapping
  public ResponseEntity<List<FarmResponse>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<FarmResponse> findById(@PathVariable Long id) {
    return ResponseEntity.ok(service.findById(id));
  }
}
