package com.betrybe.weatherreport;

import com.betrybe.weatherreport.interfaces.WeatherClient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 * Implementação do cliente responsável por consultar a API Open-Meteo
 * para obter a temperatura atual de uma cidade.
 */
public class WeatherApi implements WeatherClient {
  /**
   * Utilizado para realizar chamadas HTTP à API.
   */
  private final RestTemplate restTemplate = new RestTemplate();

  /**
   * Utilizado para manipular e converter dados JSON.
   */
  private final ObjectMapper mapper = new ObjectMapper();

  /**
   * Representa as coordenadas geográficas retornadas pela API de geocodificação.
   *
   * @param latitude latitude da cidade
   * @param longitude longitude da cidade
   */
  @JsonIgnoreProperties(ignoreUnknown = true)
  record Geocode(String latitude, String longitude) {
  }

  /**
   * Busca as coordenadas geográficas de uma cidade.
   *
   * @param city nome da cidade
   * @return objeto contendo latitude e longitude
   */
  private Geocode getGeocode(String city) {
    String json = restTemplate.getForObject(getGeocodeUrl(city), String.class);

    try {
      JsonNode jsonNode = mapper.readTree(json);
      JsonNode cityNode = jsonNode.at("/results/0");

      return mapper.treeToValue(cityNode, Geocode.class);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }

  /**
   * Monta a URL utilizada para consultar as coordenadas da cidade.
   *
   * @param city nome da cidade
   * @return URL da API de geocodificação
   */
  private String getGeocodeUrl(String city) {
    return String.format(
        "https://geocoding-api.open-meteo.com/v1/search?language=pt_BR&name=%s",
        city
    );
  }

  /**
   * Representa o resultado retornado pela API de previsão do tempo.
   *
   * @param currentWeather dados do clima atual
   */
  record WeatherResult(
      @JsonProperty("current_weather") CurrentWeather currentWeather
  ) {
  }

  /**
   * Representa os dados do clima atual.
   *
   * @param temperature temperatura atual
   */
  record CurrentWeather(String temperature) {
  }

  /**
   * Obtém a temperatura atual utilizando as coordenadas da cidade.
   *
   * @param geocode coordenadas geográficas da cidade
   * @return temperatura atual
   */
  private String getCurrentTemperature(Geocode geocode) {
    WeatherResult weatherResult = restTemplate.getForObject(
        getWeatherUrl(geocode),
        WeatherResult.class
    );

    return weatherResult.currentWeather().temperature();
  }

  /**
   * Monta a URL utilizada para consultar a previsão do tempo.
   *
   * @param geocode coordenadas geográficas da cidade
   * @return URL da API de previsão do tempo
   */
  private String getWeatherUrl(Geocode geocode) {
    return String.format(
        "https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&current_weather=true",
        geocode.latitude(),
        geocode.longitude()
    );
  }

  /**
   * Obtém a temperatura atual de uma cidade.
   *
   * @param city nome da cidade
   * @return mensagem contendo a temperatura atual da cidade
   */
  @Override
  public String getWeather(String city) {
    Geocode geocode = getGeocode(city);
    String currentTemperature = getCurrentTemperature(geocode);

    return String.format(
        "temperatura atual de %s em %s",
        currentTemperature,
        city
    );
  }
}
