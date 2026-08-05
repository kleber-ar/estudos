package com.betrybe.agrix.ebytr.staff.service;

import com.betrybe.agrix.ebytr.staff.repository.PersonRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Implementation of UserDetailsService.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  private final PersonRepository repository;

  public UserDetailsServiceImpl(PersonRepository repository) {
    this.repository = repository;
  }

  @Override
  public UserDetails loadUserByUsername(String username)
      throws UsernameNotFoundException {

    return repository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
  }
}
