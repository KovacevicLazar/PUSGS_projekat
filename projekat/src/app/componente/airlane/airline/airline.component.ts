import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  
  allAirline: Array<Airline>;

  constructor(private airlineService: AirlineService) { 
    this.allAirline = this.airlineService.mockedAirlines();
  }

  ngOnInit(): void {
  }

}
