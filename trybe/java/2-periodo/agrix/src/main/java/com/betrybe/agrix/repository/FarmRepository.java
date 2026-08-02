package com.betrybe.agrix.repository;

import com.betrybe.agrix.entity.Farm;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * FarmRepository.
 */
public interface FarmRepository extends JpaRepository<Farm, Long> {

}
