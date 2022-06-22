import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvercionServiceService {

  temperature: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { }

  fahrenheitValue(){
    return this.temperature.pipe(
      map(v => (v * 9/5 + 32)),
      map(v => this.round(v))   
    )
  }


  KelvinValue(){
    return this.temperature.pipe(
      map(v => (v + 273.15)),
      map(v => this.round(v))
    )
  }

  nextFahrenheit(fValue: number){
    const newValue = (fValue - 32) * 5/9;
    const rounded = this.round2(newValue)
    this.temperature.next(newValue);
  }


  nextKelvin(KValue: number){
    const newValue = KValue + 273.15
    const rounded = this.round2(newValue)
    this.temperature.next(newValue);
  }


  round(value:number){
    return parseFloat(value.toFixed(3));
  }

  round2(value:number){
    const v1  = value * 1000;
    const v2 = Math.round(v1)
    const v3 = v2 / 1000
    return v3
  }

//   toKelvin(): Observable<number>{
//     return this.temperature.pipe(
//      map(e => e + 273.15)
//     ) 
    
//   }

//   toFahrenheit(): Observable<number>{
//     return this.temperature.pipe(
//       map(e => e * 9/5 + 32)
//     ) 
//   }

//   temperatureUpdated(){
//     const newValue = this.temperature.value
//     this.temperature.next(newValue)
//   }
}
