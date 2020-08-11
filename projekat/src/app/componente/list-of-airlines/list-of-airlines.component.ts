import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-list-of-airlines',
  templateUrl: './list-of-airlines.component.html',
  styleUrls: ['./list-of-airlines.component.css']
})
export class ListOfAirlinesComponent implements OnInit {

  AllAirlines :Array<Airline>=new Array<Airline>();
  id: number;
  user: User;

  constructor(private Airlines:AirlineService,private userService : UserService , private route: ActivatedRoute ) { 
    this.AllAirlines= Airlines.loadAirlines();
   

    route.params.subscribe(params => { this.id = params['id']; })
     this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
      }
    });

    
  }

  ngOnInit(): void {
  }

}
