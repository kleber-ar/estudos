package com.betrybe.ecommerce;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProductServiceTest {
  @Autowired
  ProductService productService;

  @Test
  public void testProductCreation() {
    Product product = new Product();
    product.setName("Panela");
    product.setPrice(60.35);

    Product savedProduct = productService.save(product);

    assertNotNull(savedProduct.getId());
    assertEquals(product.getName(), savedProduct.getName());
    assertEquals(product.getPrice(), savedProduct.getPrice());
  }
}