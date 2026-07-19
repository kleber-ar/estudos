package com.betrybe.shopping.controller;

import com.betrybe.shopping.controller.dto.CategoryCreationDto;
import com.betrybe.shopping.entity.Category;
import com.betrybe.shopping.service.CategoryService;
import java.util.List;
import java.util.UUID;
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
@RequestMapping("/categories")
public class CategoryController {

  private final CategoryService categoryService;

  @Autowired
  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Category create(@RequestBody CategoryCreationDto dto) {
    Category category = dto.toEntity();

    return categoryService.create(category);
  }

  @GetMapping
  public List<Category> findAll() {
    return categoryService.findAll();
  }

  @GetMapping("/{categoryId}")
  public Category findById(@PathVariable UUID categoryId) {
    return categoryService.findById(categoryId);
  }

  @PatchMapping("/{categoryId}")
  public Category update(@PathVariable UUID categoryId, @RequestBody CategoryCreationDto dto) {
    return categoryService.update(categoryId, dto.toEntity());
  }

  @DeleteMapping("/{categoryId}")
  public void delete(@PathVariable UUID categoryId) {
    categoryService.delete(categoryId);
  }
}
