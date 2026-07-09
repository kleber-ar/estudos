package com.betrybe.museumfinder.solution;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.betrybe.museumfinder.controller.MuseumController;
import com.betrybe.museumfinder.model.Coordinate;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.MuseumServiceInterface;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(MuseumController.class)
class MuseumControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MuseumServiceInterface museumService;

  @Test
  void testGetMuseum() throws Exception {
    Museum museum = new Museum();
    museum.setId(1L);
    museum.setName("Museu Teste");
    museum.setCoordinate(new Coordinate(10.0, 20.0));

    when(museumService.getMuseum(1L))
        .thenReturn(museum);

    mockMvc.perform(get("/museums/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1))
        .andExpect(jsonPath("$.name").value("Museu Teste"));
  }

  @Test
  void testGetClosestMuseum() throws Exception {
    Museum museum = new Museum();
    museum.setId(1L);
    museum.setName("Museu Próximo");
    museum.setCoordinate(new Coordinate(10.0, 20.0));

    when(museumService.getClosestMuseum(any(), any()))
        .thenReturn(museum);

    mockMvc.perform(get("/museums/closest")
            .param("lat", "10.0")
            .param("lng", "20.0")
            .param("max_dist_km", "10"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.name").value("Museu Próximo"));
  }

  @Test
  void testCreateMuseum() throws Exception {

    Museum museum = new Museum();
    museum.setId(1L);
    museum.setName("Museu Criado");
    museum.setCoordinate(new Coordinate(10.0, 20.0));

    when(museumService.createMuseum(any()))
        .thenReturn(museum);

    String body = """
        {
          "name": "Museu Criado",
          "description": "Descrição",
          "address": "Endereço",
          "collectionType": "História",
          "subject": "Arte",
          "url": "http://teste.com",
          "coordinate": {
            "latitude": 10.0,
            "longitude": 20.0
          }
        }
        """;

    mockMvc.perform(post("/museums")
            .contentType(MediaType.APPLICATION_JSON)
            .content(body))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1))
        .andExpect(jsonPath("$.name").value("Museu Criado"));
  }
}
