package com.betrybe.agrix.service;

import com.betrybe.agrix.dto.request.FarmRequest;
import com.betrybe.agrix.dto.response.FarmResponse;
import com.betrybe.agrix.entity.Farm;
import com.betrybe.agrix.mapper.FarmMapper;
import com.betrybe.agrix.repository.FarmRepository;
import org.springframework.stereotype.Service;

/**
 * FarmService.
 */
@Service
public class FarmService {

  private final FarmRepository repository;
  private final FarmMapper mapper;

  public FarmService(FarmRepository repository, FarmMapper mapper) {
    this.repository = repository;
    this.mapper = mapper;
  }

  /**
   * O Response.
   *
   * @param request dados da requisição
   * @return entidade farm
   */
  public FarmResponse create(FarmRequest request) {
    Farm farm = mapper.toEntity(request);

    Farm savedFarm = repository.save(farm);

    return mapper.toResponse(savedFarm);
  }
}
