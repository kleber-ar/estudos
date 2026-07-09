package com.betrybe.museumfinder.solution;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.betrybe.museumfinder.database.MuseumFakeDatabase;
import com.betrybe.museumfinder.dto.CollectionTypeCount;
import com.betrybe.museumfinder.service.CollectionTypeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class CollectionTypeServiceTest {

  private MuseumFakeDatabase database;
  private CollectionTypeService service;

  @BeforeEach
  void setup() {
    database = Mockito.mock(MuseumFakeDatabase.class);
    service = new CollectionTypeService(database);
  }

  @Test
  void testSingleCollectionType() {
    when(database.countByCollectionType("hist")).thenReturn(5L);

    CollectionTypeCount result = service.countByCollectionTypes("hist");

    assertEquals(5L, result.count());
    assertArrayEquals(new String[]{"hist"}, result.collectionTypes());

    verify(database).countByCollectionType("hist");
  }

  @Test
  void testMultipleCollectionTypes() {
    when(database.countByCollectionType("hist")).thenReturn(3L);
    when(database.countByCollectionType("imag")).thenReturn(2L);

    CollectionTypeCount result =
        service.countByCollectionTypes("hist, imag");

    assertEquals(5L, result.count());
    assertArrayEquals(
        new String[]{"hist", "imag"},
        result.collectionTypes());

    verify(database).countByCollectionType("hist");
    verify(database).countByCollectionType("imag");
  }

  @Test
  void testZeroResults() {
    when(database.countByCollectionType("arte")).thenReturn(0L);

    CollectionTypeCount result =
        service.countByCollectionTypes("arte");

    assertEquals(0L, result.count());
  }
}
