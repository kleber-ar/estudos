package com.betrybe.agrix.ebytr.staff.mapper;

import com.betrybe.agrix.ebytr.staff.dto.request.PersonRequest;
import com.betrybe.agrix.ebytr.staff.dto.response.PersonResponse;
import com.betrybe.agrix.ebytr.staff.entity.Person;
import org.springframework.stereotype.Component;

/**
 * Classe responsável por converter objetos Person.
 */
@Component
public class PersonMapper {

  /**
   * Converte um DTO em entidade.
   *
   * @param request dados da pessoa
   * @return entidade Person
   */
  public Person toEntity(PersonRequest request) {
    Person person = new Person();

    person.setUsername(request.getUsername());
    person.setPassword(request.getPassword());
    person.setRole(request.getRole());

    return person;
  }

  /**
   * Converte uma entidade em DTO.
   *
   * @param person entidade
   * @return DTO de resposta
   */
  public PersonResponse toDto(Person person) {
    PersonResponse response = new PersonResponse();

    response.setId(person.getId());
    response.setUsername(person.getUsername());
    response.setRole(person.getRole());

    return response;
  }
}
