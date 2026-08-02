package com.betrybe.agrix.mapper;

import com.betrybe.agrix.dto.request.CropRequest;
import com.betrybe.agrix.dto.response.CropResponse;
import com.betrybe.agrix.entity.Crop;
import org.springframework.stereotype.Component;

/**
 * Mapper de Crop.
 */
@Component
public class CropMapper {

  /**
   * Converte um CropRequest para Crop.
   *
   * @param request dados da requisição
   * @return entidade Crop
   */
  public Crop toEntity(CropRequest request) {
    Crop crop = new Crop();
    crop.setName(request.getName());
    crop.setPlantedArea(request.getPlantedArea());

    return crop;
  }

  /**
   * Converte Crop para CropResponse.
   *
   * @param crop entidade Crop
   * @return DTO de resposta
   */
  public CropResponse toResponse(Crop crop) {
    CropResponse response = new CropResponse();

    response.setId(crop.getId());
    response.setName(crop.getName());
    response.setPlantedArea(crop.getPlantedArea());
    response.setFarmId(crop.getFarm().getId());

    return response;
  }
}
