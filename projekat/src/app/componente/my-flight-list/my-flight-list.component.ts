import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { MatDialog } from '@angular/material/dialog';
import { ChangeFlightComponent } from '../change-flight/change-flight.component';

@Component({
  selector: 'app-my-flight-list',
  templateUrl: './my-flight-list.component.html',
  styleUrls: ['./my-flight-list.component.css']
})
export class MyFlightListComponent implements OnInit {

  id: number;
  user: User;
  Flights = new Array<Flight>();

  constructor(private airlineService: AirlineService ,private router: Router,private route: ActivatedRoute,private userService : UserService,public dialog: MatDialog) { 

    this.AllFlightsFun();
    
  }


  ngOnInit(): void {
  }


  AllFlightsFun() {
    this.Flights.length = 0;
    this.airlineService.GetFlightForAirline().subscribe((res: any) => {
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
         let v=10;
         this.Flights.push(flight);
      }
    });
  }


  Remove(flight : Flight,allFlight : Array<Flight>)
  {
    this.airlineService.DeleteFlightFromList(flight.id).subscribe((res: any) => {
      this.AllFlightsFun();
    });
  }

  Modify(flight,allFlight)
  {
    this.openDialog(flight).afterClosed().subscribe(result => {
      if(result=="Cancel"){
        alert("Podaci nisu menjani.")
      }
      else{
        let newFlight= result as Flight;
        
        this.airlineService.SaveChangesOnFlight(newFlight).subscribe((res:any) => {
          this.AllFlightsFun();
        });
      
      }
    });  
  
  }

  openDialog(flight1: Flight): any{
    return this.dialog.open(ChangeFlightComponent, {
      disableClose: true,
      data:{
         flight : flight1,
        }
    });
  }

}
