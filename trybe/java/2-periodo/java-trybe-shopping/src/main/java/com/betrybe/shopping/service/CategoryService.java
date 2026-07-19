package com.betrybe.shopping.service;

import com.betrybe.shopping.entity.Category;
import com.betrybe.shopping.repository.CategoryRepository;
import com.betrybe.shopping.service.exception.CategoryNotFoundException;
import com.betrybe.shopping.util.PropertyMapper;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

  private final CategoryRepository categoryRepository;
  private final BrandService brandService;

  @Autowired
  public CategoryService(CategoryRepository categoryRepository, BrandService brandService) {
    this.categoryRepository = categoryRepository;
    this.brandService = brandService;
  }

  public List<Category> findAll() {
    return categoryRepository.findAll();
  }

  public Category create(Category category) {
    return categoryRepository.save(category);
  }

  public Category findById(UUID id) {
    return categoryRepository.findById(id)
        .orElseThrow(CategoryNotFoundException::new);
  }

  public void delete(UUID id) {
    categoryRepository.deleteById(id);
  }

  public Category update(UUID id, Category category) {
    Category categoryDb = findById(id);
    PropertyMapper.copyNonNullProperties(category, categoryDb);

    return categoryRepository.save(categoryDb);
  }

}
