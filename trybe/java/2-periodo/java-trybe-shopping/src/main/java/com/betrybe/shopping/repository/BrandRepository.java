package com.betrybe.shopping.repository;

import com.betrybe.shopping.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Long> {

}
