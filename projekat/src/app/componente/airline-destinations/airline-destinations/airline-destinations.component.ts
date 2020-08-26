import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { Airline } from 'src/app/entities/airline/airline';
import { Flight } from 'src/app/entities/flight/flight';

@Component({
  selector: 'app-airline-destinations',
  templateUrl: './airline-destinations.component.html',
  styleUrls: ['./airline-destinations.component.css']
})
export class AirlineDestinationsComponent implements OnInit {

 allAirlines: Array<Airline>;
 public airlineDestin="";
 public airlineId : number;
 Flights = new Array<Flight>();
 

  constructor(private airlineService: AirlineService,private route :ActivatedRoute) { 

    route.params.subscribe(params => {

      this.airlineId = Number( params['idAir'] );
      this.airlineService.GetFlighs(this.airlineId).subscribe((res: any) => {
        for (let i = 0; i < res.listflight.length; i++) {

          let transitList= new Array<string>();
  
          if(res.listflight[i].firstStop !=""){
            transitList.push(res.listflight[i].firstStop);
          }
          if(res.listflight[i].secondStop!=""){
            transitList.push(res.listflight[i].secondStop);
          }
          if(res.listflight[i].thirdStop!=""){
            transitList.push(res.listflight[i].thirdStop);
          }
  
  
           let flight= new Flight(res.listflight[i].id, res.listflight[i].flyingFrom, res.listflight[i].flyingTo, new Date(res.listflight[i].dateDepart),new Date(res.listflight[i].dateArrival), res.listflight[i].flightDistance, transitList, res.listflight[i].ticketPrice, res.listflight[i].vacantSeats, res.listflight[i].busySeats);
        
           this.Flights.push(flight);
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
