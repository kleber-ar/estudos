package com.betrybe.weatherreport.solution;

import com.betrybe.weatherreport.interfaces.WeatherClient;
import com.betrybe.weatherreport.interfaces.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Implementation of WeatherService component.
 */
@Component
public class WeatherServiceImpl implements WeatherService {
  
  private WeatherClient weatherClient;

  @Autowired
  public WeatherServiceImpl(WeatherClient weatherClient) {
    this.weatherClient = weatherClient;
  }

  @Override
  public String getWeatherReport(String city) {
    String weather = weatherClient.getWeather(city);
    
    return String.format("O clima é: %s", weather);
  }
}
