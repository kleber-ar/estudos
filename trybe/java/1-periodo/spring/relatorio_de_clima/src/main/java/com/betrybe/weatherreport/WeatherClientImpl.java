package com.betrybe.weatherreport.solution;

import com.betrybe.weatherreport.interfaces.WeatherClient;

/**
 * retorna o tempo.
 */
public class WeatherClientImpl implements WeatherClient {
  @Override
  public String getWeather(String city) {
    return "tempinho bom";
  }
}
