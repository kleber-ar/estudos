package com.betrybe.podcastmanager;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.exception.PodcastNotFoundException;
import com.betrybe.podcastmanager.service.PodcastService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test") // Ativamos o perfil de teste
public class PodcastServiceWithoutMockTest {

  @Autowired
  PodcastService podcastService;

  @Test
  public void testPodcastRetrieval() {
    // Criamos o objeto que utilizaremos para salvar
    Podcast podcast = new Podcast();
    podcast.setName("Conversando sobre Java");
    podcast.setUrl("http://www.dominio.com.br/podcast");

    // Salvamos o objeto diretamente pela camada de serviço.
    // Poderíamos fazer isso também pelo repositório, mas criaríamos
    // uma dependência a mais. Além disso, o método 'createPodcast'
    // já está sendo testado em outro método desta classe
    Long createdId = podcastService.createPodcast(podcast).getId();

    // Utilizamos o ID do objeto retornado para buscar novamente
    Podcast returnedPodcast = podcastService.getPodcast(createdId);

    // Verificamos se os dados retornados estão corretos.
    assertEquals(returnedPodcast.getId(), createdId);
    assertEquals(returnedPodcast.getName(), podcast.getName());
    assertEquals(returnedPodcast.getUrl(), podcast.getUrl());
  }

  @Test
  public void testPodcastRetrievalNotFound() {
    // Como o repositório não está mockado, para gerar uma exceção
    // procuramos por um ID que sabemos não existir no banco,
    // que vai estar vazio ou no máximo ter um ou dois elementos inseridos
    // pelos outros testes desta classe
    assertThrows(PodcastNotFoundException.class, () -> podcastService.getPodcast(99999L));
  }

  @Test
  public void testPodcastCreation() {
    // Criamos o objeto que utilizaremos para salvar
    Podcast podcast = new Podcast();
    podcast.setName("Conversando sobre Java");
    podcast.setUrl("http://www.dominio.com.br/podcast");

    // Chamamos a camada de serviço e guardamos o retorno
    Podcast savedPodcast = podcastService.createPodcast(podcast);

    // Verificamos se os dados retornados estão corretos.
    // Como não temos o repositório mockado, o ID será gerado pelo banco,
    // então nós só podemos validar se ele é não-nulo
    assertNotNull(savedPodcast.getId());
    assertEquals(podcast.getName(), savedPodcast.getName());
    assertEquals(podcast.getUrl(), savedPodcast.getUrl());
  }
}
