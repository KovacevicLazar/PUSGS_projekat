import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';

@Component({
  selector: 'app-my-flight-list',
  templateUrl: './my-flight-list.component.html',
  styleUrls: ['./my-flight-list.component.css']
})
export class MyFlightListComponent implements OnInit {

  id: number;
  user: User;
  allFlight= new Array<Flight>();

  constructor(private rentcarService: AirlineService ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    route.params.subscribe(params => { this.id = params['id']; })
      this.userService.loadUsers().forEach(element => {
        if(element.id==this.id){
          this.user=element;
          this.rentcarService.loadAirlines().forEach(element1 =>
            {
              if(element.id == element1.adminId)
              {
                 this.allFlight = element1.flights;
              }
            })
        }
      });
  }


  ngOnInit(): void {
  }


  Remove()
  {
      
  }

  Modify()
  {
  
  }

}
