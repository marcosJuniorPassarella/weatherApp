import { Component, OnInit } from '@angular/core';
import { faTemperatureHigh, faTemperatureLow, faWind, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  weatherDatas!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherDatas('Sidney')
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        }
      })
  }
}
