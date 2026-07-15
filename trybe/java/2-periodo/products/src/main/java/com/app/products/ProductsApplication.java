package com.app.products;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.app.products.models.entities")
@EnableJpaRepositories("com.app.products.models.repositories")
@ComponentScan("com.app.products")
public class ProductsApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductsApplication.class, args);
  }

}
