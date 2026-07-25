package com.betrybe.trybrecho.service;

import com.betrybe.trybrecho.entity.Product;
import com.betrybe.trybrecho.service.exception.ProductNotFoundException;
import com.betrybe.trybrecho.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  ProductRepository productRepository;
  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Product create(Product product) {
    return productRepository.save(product);
  }

  public Product findById(Long id) {
    return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
  }
}
