import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureInputComponent } from './components/temperature-input/temperature-input.component';
import { TemperatureKelvinComponent } from './components/temperature-kelvin/temperature-kelvin.component';
import { TemperatureFahrenheitComponent } from './components/temperature-fahrenheit/temperature-fahrenheit.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureInputComponent,
    TemperatureKelvinComponent,
    TemperatureFahrenheitComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
