package com.betrybe.agrix.controller;

import com.betrybe.agrix.dto.request.CropRequest;
import com.betrybe.agrix.dto.response.CropResponse;
import com.betrybe.agrix.service.CropService;
import jakarta.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller de Crop.
 */
@RestController
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
  @RequestMapping("/farms/{farmId}/crops")
  public ResponseEntity<CropResponse> create(
      @PathVariable Long farmId,
      @RequestBody @Valid CropRequest request) {

    CropResponse response = service.create(farmId, request);

    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  /**
   * Lista as plantações de uma fazenda.
   *
   * @param farmId id da fazenda
   * @return lista de plantações
   */
  @GetMapping("/farms/{farmId}/crops")
  public ResponseEntity<List<CropResponse>> findByFarm(
      @PathVariable Long farmId) {

    return ResponseEntity.ok(service.findByFarm(farmId));
  }

  /**
   * Lista todas as plantações.
   *
   * @return lista de plantações
   */
  @GetMapping("/crops")
  public ResponseEntity<List<CropResponse>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  /**
   * Busca uma plantação pelo id.
   *
   * @param id id da plantação
   * @return plantação encontrada
   */
  @GetMapping("/crops/{id}")
  public ResponseEntity<CropResponse> findById(
      @PathVariable Long id) {

    return ResponseEntity.ok(service.findById(id));
  }

  /**
   * Busca plantações pelo período de colheita.
   *
   * @param start data inicial
   * @param end   data final
   * @return lista de plantações
   */
  @GetMapping("/crops/search")
  public ResponseEntity<List<CropResponse>> search(
      @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,

      @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {

    return ResponseEntity.ok(service.search(start, end));
  }

  /**
   * Associa um fertilizante a uma plantação.
   *
   * @param cropId       id da plantação
   * @param fertilizerId id do fertilizante
   * @return mensagem de sucesso
   */
  @PostMapping("/crops/{cropId}/fertilizers/{fertilizerId}")
  public ResponseEntity<String> addFertilizer(
      @PathVariable Long cropId,
      @PathVariable Long fertilizerId) {

    service.addFertilizer(cropId, fertilizerId);

    return ResponseEntity.status(HttpStatus.CREATED)
        .body("Fertilizante e plantação associados com sucesso!");
  }
}
