import { Component, OnInit } from '@angular/core';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { RouterModule,Router }  from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { Car } from 'src/app/entities/car/car';



@Component({
  selector: 'app-my-car-list',
  templateUrl: './my-car-list.component.html',
  styleUrls: ['./my-car-list.component.css']
})
export class MyCarListComponent implements OnInit {

  allRentcCars: Array<RentCar>;
  rentcar: RentCar;
  
  id : number;
  user : User;
  imeneko: string;
  allcars: Array<Car>;

  
  constructor(private rentcarService: RentCarService  ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    this.allRentcCars = this.rentcarService.loadRentCars();

    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
     if(element.id==this.id){
       this.user=element;
     }
   });
    
    route.params.subscribe(params => { this.id = params['id']; })
      this.userService.loadUsers().forEach(element => {
        if(element.id==this.id){
          this.allRentcCars.forEach(element1 =>
            {
              if(element.id == element1.adminId)
              {
                 this.allcars = element1.availableCars;
              }
            })
         
        }
      });
  }

  ngOnInit(): void {
  }

}
