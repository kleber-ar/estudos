package com.betrybe.agrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.betrybe.agrix.entity.Farm;

public interface FarmRepository extends JpaRepository<Farm, Long> {

}
