import { Component, Input } from '@angular/core';
import { faTemperatureHigh, faTemperatureLow, faWind, faDroplet, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { WeatherDatas } from '../../../../models/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatas!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
