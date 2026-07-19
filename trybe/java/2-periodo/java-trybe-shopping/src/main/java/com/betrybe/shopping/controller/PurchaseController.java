package com.betrybe.shopping.controller;

import com.betrybe.shopping.entity.Purchase;
import com.betrybe.shopping.service.PurchaseService;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/purchases")
public class PurchaseController {

  private final PurchaseService purchaseService;

  @Autowired
  public PurchaseController(PurchaseService purchaseService) {
    this.purchaseService = purchaseService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Purchase create(@RequestBody List<UUID> productIds) {
    return purchaseService.create(productIds);
  }

  @GetMapping
  public List<Purchase> findAll() {
    return purchaseService.findAll();
  }

  @GetMapping("/{purchaseId}")
  public Purchase findById(@PathVariable long purchaseId) {
    return purchaseService.findById(purchaseId);
  }
}
