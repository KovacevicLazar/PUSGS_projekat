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

    
    this.FindUserWithUserEmail(); 
    
    this.airlineService.loadAirlines().forEach(element1 =>
    {
      if(this.user.id == element1.adminId)
      {
        element1.flights.forEach(flight =>
        {
          this.Flights.push(flight);
          });
        }
    });
  }


  ngOnInit(): void {
  }


  Remove(flight : Flight,allFlight : Array<Flight>)
  {
    if(false)
    {
      alert("You can't remove this flight, it's booked for a customer")

    }
    else
    {
      this.Flights.forEach((element,index) =>
        {
          if(element.id == flight.id)
          {
            this.Flights.splice(index,1);
          }
        });
    }
  }

  Modify(flight,allFlight)
  {
    this.openDialog(flight).afterClosed().subscribe(result => {
      if(result=="Cancel"){
        alert("Podaci nisu menjani.")
      }
      else{
        let newFlight= result as Flight;
        //Samo zameniti podatke za flight podacima iz NewFlight
      
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

  FindUserWithUserEmail(){
    const userEmail = JSON.parse(localStorage.getItem('UserEmail'));
    this.userService.loadUsers().forEach(element => {
      if(element.email== userEmail){
        this.user=element;
      }
    });
  }

}
