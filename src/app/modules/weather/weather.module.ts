import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './weather.routing';



@NgModule({
  declarations: [
    WeatherHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class WeatherModule { }
