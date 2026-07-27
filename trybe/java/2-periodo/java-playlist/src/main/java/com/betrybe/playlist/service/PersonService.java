package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Person;
import com.betrybe.playlist.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
  private final PersonRepository personRepository;

  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  public Person insert(Person person) {
    return personRepository.save(person);
  }

}
