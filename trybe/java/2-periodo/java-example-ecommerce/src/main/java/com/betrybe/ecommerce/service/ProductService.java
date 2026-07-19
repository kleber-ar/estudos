package com.betrybe.ecommerce.service;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import com.betrybe.ecommerce.service.exception.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  ProductRepository productRepository;

  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }


  public Product findById(Long id) {
    return productRepository.findById(id)
        .orElseThrow(ProductNotFoundException::new);
  }

  public Product save(Product product) {
    return productRepository.save(product);
  }
}