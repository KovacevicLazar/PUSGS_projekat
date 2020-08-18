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
   
    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
 
  }

  ngOnInit(): void {
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
