package com.betrybe.ecommerce;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers
public class ProductIntegrationTest {
  @Autowired
  ProductRepository productRepository;

  @Autowired
  MockMvc mockMvc;

  @Container
  public static MySQLContainer MYSQL_CONTAINER = new MySQLContainer("mysql:8.0.32")
      .withDatabaseName("ecommerce");

  @DynamicPropertySource
  public static void overrideProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", MYSQL_CONTAINER::getJdbcUrl);
    registry.add("spring.datasource.username", MYSQL_CONTAINER::getUsername);
    registry.add("spring.datasource.password", MYSQL_CONTAINER::getPassword);
  }

  @Test
  public void testProductCreation() throws Exception {
    // Cria produto para ser salvo
    Product product = new Product();
    product.setName("Chinelo");
    product.setPrice(20.45);

    // Salva diretamente no repositório
    Product savedProduct = productRepository.save(product);

    // Verifica se conseguimos acessar os dados pela rota
    String productUrl = "/products/%s".formatted(savedProduct.getId());
    mockMvc.perform(get(productUrl)
        .accept(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.name").value("Chinelo"))
        .andExpect(jsonPath("$.price").value("20.45"));
  }
}
