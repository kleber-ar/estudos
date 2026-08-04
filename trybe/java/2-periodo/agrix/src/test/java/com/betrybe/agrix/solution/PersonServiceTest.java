package com.betrybe.agrix.solution;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.betrybe.agrix.ebytr.staff.entity.Person;
import com.betrybe.agrix.ebytr.staff.exception.PersonNotFoundException;
import com.betrybe.agrix.ebytr.staff.repository.PersonRepository;
import com.betrybe.agrix.ebytr.staff.security.Role;
import com.betrybe.agrix.ebytr.staff.service.PersonService;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class PersonServiceTest {

  @Mock
  private PersonRepository repository;

  @InjectMocks
  private PersonService service;

  private Person person;

  @BeforeEach
  void setup() {

    person = new Person();
    person.setId(1L);
    person.setUsername("kleber");
    person.setPassword("123456");
    person.setRole(Role.ADMIN);
  }

  @Test
  void shouldReturnPersonWhenIdExists() {

    when(repository.findById(1L))
        .thenReturn(Optional.of(person));

    Person result = service.getPersonById(1L);

    assertEquals(person, result);

    verify(repository).findById(1L);
  }

  @Test
  void shouldThrowExceptionWhenIdDoesNotExist() {

    when(repository.findById(1L))
        .thenReturn(Optional.empty());

    assertThrows(
        PersonNotFoundException.class,
        () -> service.getPersonById(1L));

    verify(repository).findById(1L);
  }

  @Test
  void shouldReturnPersonWhenUsernameExists() {

    when(repository.findByUsername("kleber"))
        .thenReturn(Optional.of(person));

    Person result = service.getPersonByUsername("kleber");

    assertEquals(person, result);

    verify(repository).findByUsername("kleber");
  }

  @Test
  void shouldThrowExceptionWhenUsernameDoesNotExist() {

    when(repository.findByUsername("kleber"))
        .thenReturn(Optional.empty());

    assertThrows(
        PersonNotFoundException.class,
        () -> service.getPersonByUsername("kleber"));

    verify(repository).findByUsername("kleber");
  }

  @Test
  void shouldCreatePerson() {

    when(repository.save(person))
        .thenReturn(person);

    Person result = service.create(person);

    assertEquals(person, result);

    verify(repository).save(person);
  }
}
