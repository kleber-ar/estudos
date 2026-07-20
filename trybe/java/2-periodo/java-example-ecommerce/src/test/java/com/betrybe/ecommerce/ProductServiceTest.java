package com.betrybe.ecommerce;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import com.betrybe.ecommerce.service.ProductService;
import com.betrybe.ecommerce.service.exception.ProductNotFoundException;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
/**
 * Poderia usar mais de um profile por exemplo: @ActiveProfiles({"dev", "test"})
 **/
@ActiveProfiles("dev")
public class ProductServiceTest {

  @Autowired
  ProductService productService;

  @MockBean
  ProductRepository productRepository;

  @Test
  public void testProductCreation() {
    Product product = new Product();
    product.setName("Panela");
    product.setPrice(60.35);

    Product productToReturn = new Product();
    productToReturn.setId(123L);
    productToReturn.setName(product.getName());
    productToReturn.setPrice(product.getPrice());

    Mockito.when(productRepository.save(any()))
        .thenReturn(productToReturn);

    Product savedProduct = productService.save(product);

    Mockito.verify(productRepository).save(any());

    assertEquals(123L, savedProduct.getId());
    assertEquals(product.getName(), savedProduct.getName());
    assertEquals(product.getPrice(), savedProduct.getPrice());
  }

  @Test
  public void testProductRetrieval() {
    Product product = new Product();
    product.setId(321L);
    product.setName("Garfo");
    product.setPrice(12.34);

    Mockito.when(productRepository.findById(eq(321L)))
        .thenReturn(Optional.of(product));

    Product returnedProduct = productService.findById(321L);

    Mockito.verify(productRepository).findById(eq(321L));

    assertEquals(returnedProduct.getId(), product.getId());
    assertEquals(returnedProduct.getName(), product.getName());
    assertEquals(returnedProduct.getPrice(), product.getPrice());
  }

  @Test
  public void testProductRetrievalNotFound() {
    Mockito.when(productRepository.findById(any()))
        .thenReturn(Optional.empty());

    assertThrows(ProductNotFoundException.class, () -> productService.findById(456L));

    Mockito.verify(productRepository).findById(eq(456L));
  }
}
