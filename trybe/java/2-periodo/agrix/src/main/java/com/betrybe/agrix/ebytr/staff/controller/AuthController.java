package com.betrybe.agrix.ebytr.staff.controller;

import com.betrybe.agrix.ebytr.staff.dto.request.LoginRequest;
import com.betrybe.agrix.ebytr.staff.dto.response.TokenResponse;
import com.betrybe.agrix.ebytr.staff.entity.Person;
import com.betrybe.agrix.ebytr.staff.repository.PersonRepository;
import com.betrybe.agrix.ebytr.staff.service.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AuthController.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final PersonRepository repository;

  /**
   * Authcontroller.
   *
   * @param authenticationManager o manager
   * @param jwtService            o servie jwt
   * @param repository            o repository
   */
  public AuthController(
      AuthenticationManager authenticationManager,
      JwtService jwtService,
      PersonRepository repository) {
    this.authenticationManager = authenticationManager;
    this.jwtService = jwtService;
    this.repository = repository;
  }

  /**
   * O tokenResponse.
   *
   * @param request o request
   * @return o retorno
   */
  @PostMapping("/login")
  public TokenResponse login(
      @RequestBody LoginRequest request) {

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.username(),
            request.password()));

    Person person = repository.findByUsername(request.username()).get();

    String token = jwtService.generateToken(person);

    return new TokenResponse(token);
  }
}
