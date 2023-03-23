import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  weatherDatas!: WeatherDatas;
  initialCityName: string = 'São Paulo';
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        }
      })
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }
}
