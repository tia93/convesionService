import { Component, OnInit } from '@angular/core';
import { ConvercionServiceService } from 'src/app/service/convercion-service.service';

@Component({
  selector: 'app-temperature-kelvin',
  templateUrl: './temperature-kelvin.component.html',
  styleUrls: ['./temperature-kelvin.component.scss']
})
export class TemperatureKelvinComponent implements OnInit {
  value: number = 0
  
  constructor(private conServ: ConvercionServiceService) { 
    conServ.KelvinValue().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
      
    })
  }

  ngOnInit(): void {
  }

  valueChanged(): void{   /// funzione pulsante output
    this.conServ.nextKelvin(this.value);
    
     }
}
