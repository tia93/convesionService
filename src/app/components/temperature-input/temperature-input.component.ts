import { Component, OnInit } from '@angular/core';
import { ConvercionServiceService } from 'src/app/service/convercion-service.service';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.scss']
})
export class TemperatureInputComponent implements OnInit {

  value: number = 0

  constructor(private conServ: ConvercionServiceService) { 
    conServ.temperature.subscribe({   //il valore viene messo in value di incima
      next: v => this.value = v,
      error: err => console.log(err)
      
    })
  }

  ngOnInit(): void {
  }


  valueChanged(): void{   /// funzione pulsante output
 this.conServ.temperature.next(this.value); 
 
  }
}
