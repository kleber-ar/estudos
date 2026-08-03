package com.betrybe.agrix.service;

import com.betrybe.agrix.dto.request.CropRequest;
import com.betrybe.agrix.dto.response.CropResponse;
import com.betrybe.agrix.dto.response.FertilizerResponse;
import com.betrybe.agrix.entity.Crop;
import com.betrybe.agrix.entity.Farm;
import com.betrybe.agrix.entity.Fertilizer;
import com.betrybe.agrix.exception.NotFoundException;
import com.betrybe.agrix.mapper.CropMapper;
import com.betrybe.agrix.mapper.FertilizerMapper;
import com.betrybe.agrix.repository.CropRepository;
import com.betrybe.agrix.repository.FarmRepository;
import com.betrybe.agrix.repository.FertilizerRepository;
import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * Serviço de Crop.
 */
@Service
public class CropService {

  private final CropRepository cropRepository;
  private final FarmRepository farmRepository;
  private final FertilizerRepository fertilizerRepository;
  private final CropMapper mapper;
  private final FertilizerMapper fertilizerMapper;

  /**
   * O service.
   *
   * @param cropRepository       o Repository
   * @param farmRepository       o Repository
   * @param fertilizerRepository o Repository
   * @param fertilizerMapper     o mapper
   * @param mapper               o mapper
   */
  public CropService(
      CropRepository cropRepository,
      FarmRepository farmRepository,
      FertilizerRepository fertilizerRepository,
      CropMapper mapper,
      FertilizerMapper fertilizerMapper) {

    this.cropRepository = cropRepository;
    this.farmRepository = farmRepository;
    this.fertilizerRepository = fertilizerRepository;
    this.mapper = mapper;
    this.fertilizerMapper = fertilizerMapper;
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

  /**
   * Busca uma plantação pelo id.
   *
   * @param id id da plantação
   * @return plantação encontrada
   */
  public CropResponse findById(Long id) {

    Crop crop = cropRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Plantação não encontrada!"));

    return mapper.toResponse(crop);
  }

  /**
   * Busca plantações pelo intervalo da data de colheita.
   *
   * @param start data inicial
   * @param end   data final
   * @return lista de plantações
   */
  public List<CropResponse> search(LocalDate start, LocalDate end) {

    return cropRepository.findByHarvestDateBetween(start, end)
        .stream()
        .map(mapper::toResponse)
        .toList();
  }

  /**
   * Associa um fertilizante a uma plantação.
   *
   * @param cropId       id da plantação
   * @param fertilizerId id do fertilizante
   */
  public void addFertilizer(Long cropId, Long fertilizerId) {

    Crop crop = cropRepository.findById(cropId)
        .orElseThrow(() -> new NotFoundException("Plantação não encontrada!"));

    Fertilizer fertilizer = fertilizerRepository.findById(fertilizerId)
        .orElseThrow(() -> new NotFoundException("Fertilizante não encontrado!"));

    if (!crop.getFertilizers().contains(fertilizer)) {
      crop.getFertilizers().add(fertilizer);
    }

    cropRepository.save(crop);
  }

  /**
   * Lista os fertilizantes de uma plantação.
   *
   * @param cropId id da plantação
   * @return lista de fertilizantes
   */
  public List<FertilizerResponse> findFertilizersByCrop(Long cropId) {

    Crop crop = cropRepository.findById(cropId)
        .orElseThrow(() -> new NotFoundException("Plantação não encontrada!"));

    return crop.getFertilizers()
        .stream()
        .map(fertilizerMapper::toResponse)
        .toList();
  }

}
