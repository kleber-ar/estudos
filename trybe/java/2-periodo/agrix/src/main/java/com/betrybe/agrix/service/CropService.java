package com.betrybe.agrix.service;

import com.betrybe.agrix.dto.request.CropRequest;
import com.betrybe.agrix.dto.response.CropResponse;
import com.betrybe.agrix.entity.Crop;
import com.betrybe.agrix.entity.Farm;
import com.betrybe.agrix.exception.NotFoundException;
import com.betrybe.agrix.mapper.CropMapper;
import com.betrybe.agrix.repository.CropRepository;
import com.betrybe.agrix.repository.FarmRepository;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * Serviço de Crop.
 */
@Service
public class CropService {

  private final CropRepository cropRepository;
  private final FarmRepository farmRepository;
  private final CropMapper mapper;

  /**
   * O service.
   *
   * @param cropRepository o Repository
   * @param farmRepository o Repository
   * @param mapper         o mapper
   */
  public CropService(
      CropRepository cropRepository,
      FarmRepository farmRepository,
      CropMapper mapper) {

    this.cropRepository = cropRepository;
    this.farmRepository = farmRepository;
    this.mapper = mapper;
  }

  /**
   * Cria uma plantação.
   *
   * @param farmId  id da fazenda
   * @param request dados da plantação
   * @return plantação criada
   */
  public CropResponse create(Long farmId, CropRequest request) {

    Farm farm = farmRepository.findById(farmId)
        .orElseThrow(() -> new NotFoundException("Fazenda não encontrada!"));

    Crop crop = mapper.toEntity(request);

    crop.setFarm(farm);

    Crop savedCrop = cropRepository.save(crop);

    return mapper.toResponse(savedCrop);
  }

  /**
   * Lista todas as plantações de uma fazenda.
   *
   * @param farmId id da fazenda
   * @return lista de plantações
   */
  public List<CropResponse> findByFarm(Long farmId) {

    farmRepository.findById(farmId)
        .orElseThrow(() -> new NotFoundException("Fazenda não encontrada!"));

    return cropRepository.findByFarmId(farmId)
        .stream()
        .map(mapper::toResponse)
        .toList();
  }

  /**
   * Lista todas as plantações cadastradas.
   *
   * @return lista de plantações
   */
  public List<CropResponse> findAll() {

    return cropRepository.findAll()
        .stream()
        .map(mapper::toResponse)
        .toList();
  }

}
