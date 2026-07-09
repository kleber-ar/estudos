package com.betrybe.museumfinder.solution;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.betrybe.museumfinder.database.MuseumFakeDatabase;
import com.betrybe.museumfinder.exception.InvalidCoordinateException;
import com.betrybe.museumfinder.exception.MuseumNotFoundException;
import com.betrybe.museumfinder.model.Coordinate;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.MuseumService;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class MuseumServiceTest {

  private MuseumFakeDatabase database;
  private MuseumService service;

  @BeforeEach
  void setup() {
    database = Mockito.mock(MuseumFakeDatabase.class);
    service = new MuseumService(database);
  }

  @Test
  void testCreateMuseum() {
    Museum museum = new Museum();
    museum.setCoordinate(new Coordinate(10.0, 20.0));

    when(database.saveMuseum(museum))
        .thenReturn(museum);

    Museum result = service.createMuseum(museum);

    assertEquals(museum, result);
    verify(database).saveMuseum(museum);
  }

  @Test
  void testCreateMuseumWithInvalidCoordinate() {
    Museum museum = new Museum();
    museum.setCoordinate(new Coordinate(100.0, 20.0));

    assertThrows(
        InvalidCoordinateException.class,
        () -> service.createMuseum(museum)
    );
  }

  @Test
  void testGetClosestMuseum() {
    Coordinate coordinate = new Coordinate(10.0, 20.0);
    Museum museum = new Museum();

    when(database.getClosestMuseum(coordinate, 10.0))
        .thenReturn(Optional.of(museum));

    Museum result = service.getClosestMuseum(coordinate, 10.0);

    assertEquals(museum, result);

    verify(database)
        .getClosestMuseum(coordinate, 10.0);
  }

  @Test
  void testGetClosestMuseumNotFound() {
    Coordinate coordinate = new Coordinate(10.0, 20.0);

    when(database.getClosestMuseum(coordinate, 10.0))
        .thenReturn(Optional.empty());

    assertThrows(
        MuseumNotFoundException.class,
        () -> service.getClosestMuseum(coordinate, 10.0)
    );
  }

  @Test
  void testGetClosestMuseumInvalidCoordinate() {
    Coordinate coordinate = new Coordinate(100.0, 20.0);

    assertThrows(
        InvalidCoordinateException.class,
        () -> service.getClosestMuseum(coordinate, 10.0)
    );
  }

  @Test
  void testGetMuseum() {
    Museum museum = new Museum();
    museum.setId(1L);

    when(database.getMuseum(1L))
        .thenReturn(Optional.of(museum));

    Museum result = service.getMuseum(1L);

    assertEquals(museum, result);

    verify(database).getMuseum(1L);
  }

  @Test
  void testGetMuseumNotFound() {

    when(database.getMuseum(99L))
        .thenReturn(Optional.empty());

    assertThrows(
        MuseumNotFoundException.class,
        () -> service.getMuseum(99L)
    );
  }
}
