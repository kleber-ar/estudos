package com.betrybe.webinar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.betrybe.webinar.controller.dto.AuthDto;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthenticationManager authenticationManager;

  @Autowired
  public AuthController(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  @PostMapping("/login")
  public String login(@RequestBody AuthDto authDto) {
    UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(authDto.username(),
        authDto.password());

    Authentication auth = authenticationManager.authenticate(usernamePassword);

    return "Pessoa autenticada com sucesso: %s".formatted(auth.getName());
  }
}
