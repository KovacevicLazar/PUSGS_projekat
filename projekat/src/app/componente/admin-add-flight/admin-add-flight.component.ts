import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-admin-add-flight',
  templateUrl: './admin-add-flight.component.html',
  styleUrls: ['./admin-add-flight.component.css']
})
export class AdminAddFlightComponent implements OnInit {

 
  id: number;
  user: User;
  FlyingFrom="";
  FlyingTo ="";
  DateDepart ="";
  DateArrival="";
  FirstStop ="";
  SecondStop ="";
  ThirdStop="";
  TicketPrice ="";
  FlightLength="";

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { 
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
       
      }

    });
  }

  ngOnInit(): void {
  }

  
  AddNewFlight(){

  }

}
