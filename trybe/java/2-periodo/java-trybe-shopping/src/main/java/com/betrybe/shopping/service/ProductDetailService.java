package com.betrybe.shopping.service;

import com.betrybe.shopping.entity.ProductDetail;
import com.betrybe.shopping.repository.ProductDetailRepository;
import com.betrybe.shopping.service.exception.ProductDetailNotFound;
import com.betrybe.shopping.util.PropertyMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductDetailService {

  private final ProductDetailRepository productDetailRepository;

  @Autowired
  public ProductDetailService(ProductDetailRepository productDetailRepository) {
    this.productDetailRepository = productDetailRepository;
  }

  public List<ProductDetail> findAll() {
    return productDetailRepository.findAll();
  }

  public ProductDetail create(ProductDetail productDetail) {
    return productDetailRepository.save(productDetail);
  }

  public ProductDetail findById(long productDetailId) {
    return productDetailRepository.findById(productDetailId)
        .orElseThrow(ProductDetailNotFound::new);
  }

  public void delete(long productDetailId) {
    productDetailRepository.deleteById(productDetailId);
  }

  public ProductDetail update(long id, ProductDetail productDetail) {
    ProductDetail productDetailDb = findById(id);
    PropertyMapper.copyNonNullProperties(productDetail, productDetailDb);
    return productDetailRepository.save(productDetail);
  }

}
