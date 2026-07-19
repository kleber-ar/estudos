package com.betrybe.shopping.controller;

import com.betrybe.shopping.controller.dto.BrandCreationDto;
import com.betrybe.shopping.entity.Brand;
import com.betrybe.shopping.service.BrandService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/brands")
public class BrandController {

  private final BrandService brandService;

  @Autowired
  public BrandController(BrandService brandService) {
    this.brandService = brandService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Brand create(@RequestBody BrandCreationDto brandDto) {
    Brand brand = brandDto.toEntity();

    return brandService.create(brand);
  }

  @GetMapping
  public List<Brand> findAll() {
    return brandService.findAll();
  }

  @GetMapping("/{brandId}")
  public Brand findById(@PathVariable long brandId) {
    return brandService.findById(brandId);
  }

  @PatchMapping("/{brandId}")
  public Brand update(@PathVariable long brandId, @RequestBody BrandCreationDto dto) {
    return brandService.update(brandId, dto.toEntity());
  }

  @DeleteMapping("/{brandId}")
  public void delete(@PathVariable long brandId) {
    brandService.delete(brandId);
  }

}
