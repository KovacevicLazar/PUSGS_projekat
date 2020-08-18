import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { Airline } from 'src/app/entities/airline/airline';

@Component({
  selector: 'app-my-airline-servis',
  templateUrl: './my-airline-servis.component.html',
  styleUrls: ['./my-airline-servis.component.css']
})
export class MyAirlineServisComponent implements OnInit {


  id:number;
  user: User;
  airline: Airline;


  constructor(private rentcarService: AirlineService ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    
    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
    
    this.rentcarService.loadAirlines().forEach(element1 =>
      {
        if(this.user.id == element1.adminId)
        {
           this.airline = element1;
        }
      })

  }


  ngOnInit(): void {
  }

  ChangeInfos()
  {
    //this.router.navigate(['/myRCservis/changeInfo']);
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
