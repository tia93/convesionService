import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvercionServiceService {

  temperature: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { }


  toKelvin(): Observable<number>{
    return this.temperature.pipe(
     map(e => e + 273.15)
    ) 
    
  }

  toFahrenheit(): Observable<number>{
    return this.temperature.pipe(
      map(e => e * 9/5 + 32)
    ) 
  }

  temperatureUpdated(){
    const newValue = this.temperature.value
    this.temperature.next(newValue)
  }
}
