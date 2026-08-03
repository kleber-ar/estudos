package com.betrybe.agrix.service;

import com.betrybe.agrix.dto.request.FertilizerRequest;
import com.betrybe.agrix.dto.response.FertilizerResponse;
import com.betrybe.agrix.entity.Fertilizer;
import com.betrybe.agrix.mapper.FertilizerMapper;
import com.betrybe.agrix.repository.FertilizerRepository;
import org.springframework.stereotype.Service;

/**
 * Serviço de Fertilizer.
 */
@Service
public class FertilizerService {

  private final FertilizerRepository repository;
  private final FertilizerMapper mapper;

  /**
   * Constructo.
   *
   * @param repository pega o repository
   * @param mapper     pega o mapper
   */
  public FertilizerService(
      FertilizerRepository repository,
      FertilizerMapper mapper) {

    this.repository = repository;
    this.mapper = mapper;
  }

  /**
   * O metodo create.
   *
   * @param request a requisição
   * @return a entidade
   */
  public FertilizerResponse create(FertilizerRequest request) {

    Fertilizer fertilizer = mapper.toEntity(request);

    return mapper.toResponse(repository.save(fertilizer));
  }
}
