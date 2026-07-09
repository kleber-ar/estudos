package com.betrybe.museumfinder.solution;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.betrybe.museumfinder.controller.CollectionTypeController;
import com.betrybe.museumfinder.dto.CollectionTypeCount;
import com.betrybe.museumfinder.service.CollectionTypeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(CollectionTypeController.class)
class CollectionTypeControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private CollectionTypeService service;

  @Test
  void testReturnOk() throws Exception {

    when(service.countByCollectionTypes("hist"))
        .thenReturn(new CollectionTypeCount(
            new String[]{"hist"}, 10L));

    mockMvc.perform(get("/collections/count/hist"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.count").value(10))
        .andExpect(jsonPath("$.collectionTypes[0]").value("hist"));
  }

  @Test
  void testReturnNotFound() throws Exception {

    when(service.countByCollectionTypes("hist"))
        .thenReturn(new CollectionTypeCount(
            new String[]{"hist"}, 0L));

    mockMvc.perform(get("/collections/count/hist"))
        .andExpect(status().isNotFound());
  }
}
