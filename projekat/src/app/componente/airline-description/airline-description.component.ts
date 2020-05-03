import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';


@Component({
  selector: 'app-airline-description',
  templateUrl: './airline-description.component.html',
  styleUrls: ['./airline-description.component.css']
})
export class AirlineDescriptionComponent implements OnInit {

  public airlineId;
  public airlineDesc ="";
  allAirlines:Array<Airline>;

  constructor(private airlineService: AirlineService,private route: ActivatedRoute) { 
    this.allAirlines = this.airlineService.loadAirlines();

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.airlineId = id;

    this.allAirlines.forEach(element =>{
      if(element.id == this.airlineId)
      {
        this.airlineDesc = element.description;
      }
    })

  }

  ngOnInit(): void {
  }

}
