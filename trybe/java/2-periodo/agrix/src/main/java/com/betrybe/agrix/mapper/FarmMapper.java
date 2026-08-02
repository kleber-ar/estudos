package com.betrybe.agrix.mapper;

import com.betrybe.agrix.dto.request.FarmRequest;
import com.betrybe.agrix.dto.response.FarmResponse;
import com.betrybe.agrix.entity.Farm;
import org.springframework.stereotype.Component;

/**
 * FarmMapper.
 */
@Component
public class FarmMapper {

  /**
   * Converte um FarmRequest em uma entidade Farm.
   *
   * @param dto dados da requisição
   * @return entidade Farm
   */
  public Farm toEntity(final FarmRequest dto) {
    Farm farm = new Farm();
    farm.setName(dto.getName());
    farm.setSize(dto.getSize());

    return farm;
  }

  /**
   * Converte uma entidade Farm em um DTO de resposta.
   *
   * @param farm entidade Farm
   * @return resposta da API
   */
  public FarmResponse toResponse(final Farm farm) {
    FarmResponse response = new FarmResponse();
    response.setId(farm.getId());
    response.setName(farm.getName());
    response.setSize(farm.getSize());

    return response;
  }
}
