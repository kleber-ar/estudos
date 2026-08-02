package com.betrybe.agrix.repository;

import com.betrybe.agrix.entity.Crop;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositório de plantações.
 */
public interface CropRepository extends JpaRepository<Crop, Long> {
  /**
   * Busca todas as plantações de uma fazenda.
   *
   * @param farmId id da fazenda
   * @return lista de plantações
   */
  List<Crop> findByFarmId(Long farmId);

}
