package com.betrybe.agrix.controller;

import com.betrybe.agrix.dto.request.CropRequest;
import com.betrybe.agrix.dto.response.CropResponse;
import com.betrybe.agrix.service.CropService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller de Crop.
 */
@RestController
@RequestMapping("/farms/{farmId}/crops")
public class CropController {

  private final CropService service;

  public CropController(CropService service) {
    this.service = service;
  }

  /**
   * Cria uma nova plantação.
   *
   * @param farmId  id da fazenda
   * @param request dados da plantação
   * @return plantação criada
   */
  @PostMapping
  public ResponseEntity<CropResponse> create(
      @PathVariable Long farmId,
      @RequestBody @Valid CropRequest request) {

    CropResponse response = service.create(farmId, request);

    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }
}
