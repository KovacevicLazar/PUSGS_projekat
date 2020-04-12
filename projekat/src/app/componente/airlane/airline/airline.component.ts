import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  
  allAirline: Array<Airline>;
  
  id: number;

  constructor(private airlineService: AirlineService, private route: ActivatedRoute) { 
    this.allAirline = this.airlineService.mockedAirlines();
    route.params.subscribe(params => { this.id = params['id']; })
  }

  ngOnInit(): void {
  }

  filterAirline(): void{
    
  }

}
