import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { Airline } from 'src/app/entities/airline/airline';

@Component({
  selector: 'app-airline-destinations',
  templateUrl: './airline-destinations.component.html',
  styleUrls: ['./airline-destinations.component.css']
})
export class AirlineDestinationsComponent implements OnInit {

 allAirlines: Array<Airline>;
 public airlineDestin="";
 public airlineId;
 

  constructor(private airlineService: AirlineService,private route :ActivatedRoute) { 
    
    this.allAirlines = this.airlineService.loadAirlines();

    let id = parseInt(this.route.snapshot.paramMap.get('idAir'));
    this.airlineId = id;

    this.allAirlines.forEach(element =>{
      if(element.id == this.airlineId)
      {
        this.airlineDestin = element.description;
      }
    })

  }

  ngOnInit(): void {
  }

}
