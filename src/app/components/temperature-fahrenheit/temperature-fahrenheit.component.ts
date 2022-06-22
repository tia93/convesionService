import { Component, OnInit } from '@angular/core';
import { ConvercionServiceService } from 'src/app/service/convercion-service.service';

@Component({
  selector: 'app-temperature-fahrenheit',
  templateUrl: './temperature-fahrenheit.component.html',
  styleUrls: ['./temperature-fahrenheit.component.scss']
})
export class TemperatureFahrenheitComponent implements OnInit {
  value: number = 0
  
  constructor(private conServ: ConvercionServiceService) { 
    conServ.fahrenheitValue().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
      
    })
  }

  ngOnInit(): void {
  }

  valueChanged(): void{   /// funzione pulsante output
    this.conServ.nextFahrenheit(this.value) 
    
     }
}
