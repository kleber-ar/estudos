package com.betrybe.weatherreport.solution;

import com.betrybe.weatherreport.interfaces.WeatherClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WeatherConfig {
  @Bean
  WeatherClient weatherClient() {
    return new WeatherClientImpl();
  }
}
