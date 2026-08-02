package com.betrybe.agrix.mapper;

import com.betrybe.agrix.dto.request.FarmRequest;
import com.betrybe.agrix.dto.response.FarmResponse;
import com.betrybe.agrix.entity.Farm;
import org.springframework.stereotype.Component;

@Component
public class FarmMapper {

  public Farm toEntity(FarmRequest dto) {
    Farm farm = new Farm();
    farm.setName(dto.getName());
    farm.setSize(dto.getSize());

    return farm;
  }

  public FarmResponse toDto(Farm farm) {
    FarmResponse response = new FarmResponse();
    response.setId(farm.getId());
    response.setName(farm.getName());
    response.setSize(farm.getSize());

    return response;
  }
}
