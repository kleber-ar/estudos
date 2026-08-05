package com.betrybe.agrix.ebytr.staff.service;

import com.betrybe.agrix.ebytr.staff.dto.request.PersonRequest;
import com.betrybe.agrix.ebytr.staff.dto.response.PersonResponse;
import com.betrybe.agrix.ebytr.staff.entity.Person;
import com.betrybe.agrix.ebytr.staff.exception.PersonNotFoundException;
import com.betrybe.agrix.ebytr.staff.mapper.PersonMapper;
import com.betrybe.agrix.ebytr.staff.repository.PersonRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service layer class for handling persons business logic.
 */
@Service
public class PersonService {

  private final PersonRepository personRepository;
  private final PersonMapper mapper;

  /**
   * Constructor de personService.
   *
   * @param personRepository repository
   * @param mapper           mapper
   */
  @Autowired
  public PersonService(
      PersonRepository personRepository,
      PersonMapper mapper) {

    this.personRepository = personRepository;
    this.mapper = mapper;
  }

  /**
   * Returns a person for a given ID.
   */
  public Person getPersonById(Long id) {
    Optional<Person> person = personRepository.findById(id);

    if (person.isEmpty()) {
      throw new PersonNotFoundException();
    }

    return person.get();
  }

  /**
   * Returns a person for a given username.
   */
  public Person getPersonByUsername(String username) {
    Optional<Person> person = personRepository.findByUsername(username);

    if (person.isEmpty()) {
      throw new PersonNotFoundException();
    }

    return person.get();
  }

  /**
   * Cria uma nova pessoa.
   *
   * @param person pessoa a ser salva
   * @return pessoa salva
   */
  public Person create(Person person) {
    return personRepository.save(person);
  }

  /**
   * Response da nova pessoa.
   *
   * @param request person pessoa a ser salva
   * @return pessoa salva
   */
  public PersonResponse create(PersonRequest request) {

    Person person = mapper.toEntity(request);

    Person saved = personRepository.save(person);

    return mapper.toDto(saved);
  }
}
