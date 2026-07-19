package com.betrybe.shopping.service;

import com.betrybe.shopping.entity.Brand;
import com.betrybe.shopping.repository.BrandRepository;
import com.betrybe.shopping.service.exception.BrandNotFoundException;
import com.betrybe.shopping.util.PropertyMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {

  private final BrandRepository brandRepository;

  @Autowired
  public BrandService(BrandRepository brandRepository) {
    this.brandRepository = brandRepository;
  }

  public List<Brand> findAll() {
    return brandRepository.findAll();
  }

  public Brand create(Brand brand) {
    return brandRepository.save(brand);
  }

  public Brand findById(long brandId) {
    return brandRepository.findById(brandId)
        .orElseThrow(BrandNotFoundException::new);
  }

  public void delete(long brandId) {
    brandRepository.deleteById(brandId);
  }

  public Brand update(long id, Brand brand) {
    Brand brandDb = findById(id);
    PropertyMapper.copyNonNullProperties(brand, brandDb);

    return brandRepository.save(brandDb);
  }
}
