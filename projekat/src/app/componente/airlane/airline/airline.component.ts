import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  
  allAirline : Array<Airline>;
  Flights = new Array<Flight>();
  
  id: number;
  user: User;
  RegistratedUser : number;
  SearchButtonClicket : number;

  flyingfrom :string;
  flyingTo: string;
  dateDepart: string;
  dateReturn: string;
  adults="1"; //Defaul Value
  children="0";
  way="One way";
  clas="Economy class";

  constructor(private userService: UserService, private airlineService: AirlineService, private route: ActivatedRoute) { 
    this.RegistratedUser=0;
    this.SearchButtonClicket=0;
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
        this.RegistratedUser=1;
      }

    });
    this.allAirline = this.airlineService.loadAirlines();
  }

  ngOnInit(): void {
  }

  filterFlights(): void{
    this.SearchButtonClicket=1;
    this.Flights.length = 0;

    let a=this.flyingTo;
    this.allAirline.forEach(element => {
      element.flights.forEach(element => {
        this.Flights.push(element);
      });
    });
    
  }

}
