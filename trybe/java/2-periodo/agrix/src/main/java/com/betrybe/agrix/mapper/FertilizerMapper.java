package com.betrybe.agrix.mapper;

import com.betrybe.agrix.dto.request.FertilizerRequest;
import com.betrybe.agrix.dto.response.FertilizerResponse;
import com.betrybe.agrix.entity.Fertilizer;
import org.springframework.stereotype.Component;

/**
 * Mapper de Fertilizer.
 */
@Component
public class FertilizerMapper {

  /**
   * O mapper to para converter.
   *
   * @param request o request
   * @return a entidade
   */
  public Fertilizer toEntity(FertilizerRequest request) {

    Fertilizer fertilizer = new Fertilizer();

    fertilizer.setName(request.getName());
    fertilizer.setBrand(request.getBrand());
    fertilizer.setComposition(request.getComposition());

    return fertilizer;
  }

  /**
   * O response.
   *
   * @param fertilizer o param
   * @return a entidade
   */
  public FertilizerResponse toResponse(Fertilizer fertilizer) {

    FertilizerResponse response = new FertilizerResponse();

    response.setId(fertilizer.getId());
    response.setName(fertilizer.getName());
    response.setBrand(fertilizer.getBrand());
    response.setComposition(fertilizer.getComposition());

    return response;
  }
}
