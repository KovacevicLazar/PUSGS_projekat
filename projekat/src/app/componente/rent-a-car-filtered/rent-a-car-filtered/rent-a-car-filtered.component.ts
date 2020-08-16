import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { UserService } from 'src/app/services/user-service/user.service';
import { AirlineService } from 'src/app/services/airline-service/airline.service';



@Component({
  selector: 'app-rent-a-car-filtered',
  templateUrl: './rent-a-car-filtered.component.html',
  styleUrls: ['./rent-a-car-filtered.component.css']
})
export class RentACarFilteredComponent implements OnInit {

  @Input() allrentcars;
  @Input() user;
  
  id : number;
  RegistratedUser : number;

  constructor(private router: Router, private route: ActivatedRoute, private userService : UserService, private RentACars : RentCarService) {

    this.RegistratedUser=0;
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
        this.RegistratedUser=1;
      }

    });
    this.allrentcars=RentACars.loadRentCars();
  }

  ngOnInit(): void {
  
  }
  OnSubmit(rentcars)
  {
      
    this.router.navigate(['/nonregRC/'.concat(rentcars.id.toString(),'/rentcDesc')]);
  }
  FilialsClick(rentcars)
  {
    this.router.navigate(['/nonregRC/'.concat(rentcars.id.toString(),'/rentCarDest')]);
  }
  

}
