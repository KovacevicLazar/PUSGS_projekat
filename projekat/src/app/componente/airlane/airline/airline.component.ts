import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  
  allAirline : Array<Airline>;
  
  id: number;
  user: User;
  RegistratedUser : number;

  constructor(private userService: UserService, private airlineService: AirlineService, private route: ActivatedRoute) { 
    this.RegistratedUser=0;
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

  filterAirline(): void{
    
  }

}
