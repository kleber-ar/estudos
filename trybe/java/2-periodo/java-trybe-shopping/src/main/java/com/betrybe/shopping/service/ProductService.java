package com.betrybe.shopping.service;

import com.betrybe.shopping.entity.Brand;
import com.betrybe.shopping.entity.Category;
import com.betrybe.shopping.entity.Product;
import com.betrybe.shopping.repository.ProductRepository;
import com.betrybe.shopping.service.exception.ProductNotFoundException;
import com.betrybe.shopping.util.PropertyMapper;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

  private final ProductRepository productRepository;
  private final BrandService brandService;
  private final CategoryService categoryService;

  @Autowired
  public ProductService(ProductRepository productRepository, BrandService brandService,
      CategoryService categoryService) {
    this.productRepository = productRepository;
    this.brandService = brandService;
    this.categoryService = categoryService;
  }

  public List<Product> findAll() {
    return productRepository.findAll();
  }

  public Product create(Product product, long brandId) {
    Brand brand = brandService.findById(brandId);

    // Usando o lombok para clonar e já alterar o atributo brand
    Product productToSave = product
        .toBuilder()
        .brand(brand)
        .build();

    productToSave.setBrand(brand);

    return productRepository.save(productToSave);
  }

  public Product findById(UUID id) {
    return productRepository.findById(id)
        .orElseThrow(ProductNotFoundException::new);
  }

  public void delete(UUID id) {
    productRepository.deleteById(id);
  }

  public Product update(UUID id, Product product) {
    Product productDb = findById(id);
    PropertyMapper.copyNonNullProperties(product, productDb);

    return productRepository.save(productDb);
  }

  public Product associateProductAndCategory(UUID productId, UUID categoryId) {
    Product product = findById(productId);
    Category category = categoryService.findById(categoryId);

    product.getCategories().add(category);

    return productRepository.save(product);
  }
}
