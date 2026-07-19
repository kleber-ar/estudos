package com.betrybe.shopping.service;

import com.betrybe.shopping.entity.Product;
import com.betrybe.shopping.entity.Purchase;
import com.betrybe.shopping.repository.PurchaseRepository;
import com.betrybe.shopping.service.exception.PurchaseNotFoundException;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

  private final PurchaseRepository purchaseRepository;
  private final ProductService productService;

  @Autowired
  public PurchaseService(PurchaseRepository purchaseRepository, ProductService productService) {
    this.purchaseRepository = purchaseRepository;
    this.productService = productService;
  }

  public List<Purchase> findAll() {
    return purchaseRepository.findAll();
  }

  public Purchase findById(long purchaseId) {
    return purchaseRepository.findById(purchaseId)
        .orElseThrow(PurchaseNotFoundException::new);
  }

  public Purchase create(List<UUID> productIds) {
    Purchase purchase = new Purchase();

    for (UUID productId : productIds) {
      Product product = productService.findById(productId);
      purchase.getProducts().add(product);
    }

    return purchaseRepository.save(purchase);
  }
}
