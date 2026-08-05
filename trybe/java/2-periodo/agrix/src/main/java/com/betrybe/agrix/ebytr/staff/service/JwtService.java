package com.betrybe.agrix.ebytr.staff.service;

import com.betrybe.agrix.ebytr.staff.entity.Person;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import org.springframework.stereotype.Service;

/**
 * Service responsible for JWT generation.
 */
@Service
public class JwtService {

  private static final String SECRET = "uma-chave-bem-grande-com-pelo-menos-32-caracteres";

  private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

  /**
   * Generates a JWT for the authenticated user.
   */
  public String generateToken(Person person) {

    return Jwts.builder()
        .setIssuer("agrix")
        .setSubject(person.getUsername())
        .setIssuedAt(new Date())
        .signWith(key)
        .compact();
  }
}
