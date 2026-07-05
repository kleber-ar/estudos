
package com.betrybe.fitness.controller;

import com.betrybe.fitness.service.FitnessServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * controller de fitness.
 */ 
@RestController
@RequestMapping("/fitness")
public class FitnessController implements FitnessControllerInterface {
  FitnessServiceInterface service;

  @Autowired
  public FitnessController(FitnessServiceInterface service) {
    this.service = service;
  }
}
