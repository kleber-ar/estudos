package 

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.betrybe.podcast.podcastmanager.entity.Podcast;
import com.betrybe.podcast.podcastmanager.repository.PodcastRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers // Configuramos o teste para utilizar Testcontainers
public class PodcastIntegrationTest {

  // Definimos um container MySQL com um banco 'podcast'
  @Container
  public static MySQLContainer MYSQL_CONTAINER = new MySQLContainer("mysql:8.0.29")
      .withDatabaseName("podcast");

  // Configuramos dinamicamente as propriedades do datasource
  @DynamicPropertySource
  public static void overrideProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", MYSQL_CONTAINER::getJdbcUrl);
    registry.add("spring.datasource.username", MYSQL_CONTAINER::getUsername);
    registry.add("spring.datasource.password", MYSQL_CONTAINER::getPassword);
  }

  @Autowired
  PodcastRepository podcastRepository;

  @Autowired
  MockMvc mockMvc;

  @Test
  public void testPodcastRetrieval() throws Exception {
    // Criamos um objeto que utilizaremos para salva
    Podcast podcast = new Podcast();
    podcast.setName("Conversando sobre Java");
    podcast.setUrl("http://www.dominio.com.br/podcast");

    // Usamos o repositório para fazer a preparação do teste e salvar o objeto
    Podcast savedPodcast = podcastRepository.save(podcast);

    // Fazemos a busca na URL definida pelo ID do objeto e validamos a resposta
    String podcastUrl = "/podcasts/%s".formatted(savedPodcast.getId());
    mockMvc.perform(get(podcastUrl)
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.name").value("Conversando sobre Java"))
        .andExpect(jsonPath("$.url").value("http://www.dominio.com.br/podcast"));
  }
}
