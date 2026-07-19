package com.betrybe.ecommerce.controller;

import com.betrybe.ecommerce.controller.dto.ProductDto;
import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

  ProductService productService;

  @Autowired
  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  @GetMapping("/{id}")
  public ProductDto getProduct(@PathVariable Long id) {
    Product product = productService.findById(id);

    return new ProductDto(product.getName(), product.getPrice());
  }
}