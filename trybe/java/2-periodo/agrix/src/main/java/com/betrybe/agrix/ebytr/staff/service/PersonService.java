package com.betrybe.agrix.ebytr.staff.service;

import com.betrybe.agrix.ebytr.staff.dto.request.PersonRequest;
import com.betrybe.agrix.ebytr.staff.dto.response.PersonResponse;
import com.betrybe.agrix.ebytr.staff.entity.Person;
import com.betrybe.agrix.ebytr.staff.exception.PersonNotFoundException;
import com.betrybe.agrix.ebytr.staff.mapper.PersonMapper;
import com.betrybe.agrix.ebytr.staff.repository.PersonRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Service layer class for handling persons business logic.
 */
@Service
public class PersonService {

  private final PersonRepository personRepository;
  private final PersonMapper mapper;
  private final PasswordEncoder passwordEncoder;

  /**
   * Constructor de personService.
   *
   * @param personRepository repository
   * @param mapper           mapper
   * @param passwordEncoder  o encoder
   */
  @Autowired
  public PersonService(
      PersonRepository personRepository,
      PersonMapper mapper,
      PasswordEncoder passwordEncoder) {

    this.personRepository = personRepository;
    this.mapper = mapper;
    this.passwordEncoder = passwordEncoder;
  }

  /**
   * Returns a person for a given ID.
   */
  public Person getPersonById(Long id) {
    return personRepository.findById(id)
        .orElseThrow(PersonNotFoundException::new);
  }

  /**
   * Returns a person for a given username.
   */
  public Person getPersonByUsername(String username) {
    return personRepository.findByUsername(username)
        .orElseThrow(PersonNotFoundException::new);
  }

  /**
   * Cria uma nova pessoa.
   *
   * @param person pessoa a ser salva
   * @return pessoa salva
   */
  public Person create(Person person) {
    person.setPassword(passwordEncoder.encode(person.getPassword()));
    return personRepository.save(person);
  }

  /**
   * Cria uma nova pessoa.
   *
   * @param request dados da pessoa
   * @return pessoa criada
   */
  public PersonResponse create(PersonRequest request) {

    Person person = mapper.toEntity(request);

    Person saved = create(person);

    return mapper.toDto(saved);
  }
}
