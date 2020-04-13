import { Component, OnInit } from '@angular/core';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';


@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  allrentcars: Array<RentCar>;
  id : number;
  user : User;
  RegistratedUser : number;
  constructor(private rentCarService: RentCarService, private route: ActivatedRoute,private userService : UserService) {
      this.RegistratedUser= 0;
      this.allrentcars = this.rentCarService.loadRentCars();
      route.params.subscribe(params => { this.id = params['id']; })
      this.userService.loadUsers().forEach(element => {
        if(element.id==this.id){
          this.user=element;
          this.RegistratedUser=1;
        }
      });
   }



  ngOnInit(): void {
  }

}
