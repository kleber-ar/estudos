package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Person;
import com.betrybe.playlist.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService implements UserDetailsService {
  private final PersonRepository personRepository;

  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  public Person insert(Person person) {
    return personRepository.save(person);
  }

  public Person insert(Person person) {
    // Precisamos criptografar a senha antes de armazenar a pessoa no banco.
    String hashedPassword = new BCryptPasswordEncoder().encode(person.getPassword());
    person.setPassword(hashedPassword);

    return personRepository.save(person);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return personRepository.findByUsername(username);
  }

}
