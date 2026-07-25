package com.betrybe.webinar.service;

import com.betrybe.webinar.entity.Person;
import com.betrybe.webinar.repository.PersonRepository;
import com.betrybe.webinar.service.exception.PersonNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

  private final PersonRepository personRepository;

  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  public Person create(Person person) {
    return personRepository.save(person);
  }

  public Person deleteById(Long id) throws PersonNotFoundException {
    Person person = getById(id);

    personRepository.delete(person);

    return person;
  }

  public Person getById(Long id) throws PersonNotFoundException {
    return personRepository.findById(id)
        .orElseThrow(PersonNotFoundException::new);
  }

  public List<Person> getAll() {
    return personRepository.findAll();
  }
}
