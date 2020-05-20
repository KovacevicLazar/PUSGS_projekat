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

    route.params.subscribe(params => { this.id = params['id']; })
      this.userService.loadUsers().forEach(element => {
        if(element.id==this.id){
          this.user=element;
          this.rentcarService.loadAirlines().forEach(element1 =>
            {
              if(element.id == element1.adminId)
              {
                 this.airline = element1;
              }
            })
        }
      });
  }


  ngOnInit(): void {
  }

  ChangeInfos()
  {
    //this.router.navigate(['/regus/'.concat(this.user.id.toString(),'/myRCservis/changeInfo')]);
  }


}
