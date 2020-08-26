import { Component, OnInit } from '@angular/core';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { RouterModule, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { Car } from 'src/app/entities/car/car';
import { element } from 'protractor';



@Component({
  selector: 'app-my-car-list',
  templateUrl: './my-car-list.component.html',
  styleUrls: ['./my-car-list.component.css']
})
export class MyCarListComponent implements OnInit {

  allRentcCars: Array<RentCar>;
  rentcar: RentCar;

  id: number;
  user: User;
  imeneko: string;
  allcars: Array<Car> = new Array<Car>();
  check1: boolean;
  check2: boolean;


  constructor(private rentcarService: RentCarService, private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.AllCarsFun();
  }

  AllCarsFun() {
    this.allcars.length = 0;
    this.rentcarService.GetCarForCompany().subscribe((res: any) => {
      for (let i = 0; i < res.listcar.length; i++) {
        var temp = new Car(res.listcar[i].id, res.listcar[i].location, res.listcar[i].brand, res.listcar[i].model, res.listcar[i].year, res.listcar[i].pricePerDay, true, res.listcar[i].babySeats, res.listcar[i].numberOfSeats)
        this.allcars.push(temp);
      }
    });
  }

  ngOnInit(): void {
  }

  Remove(car: Car) {
    this.rentcarService.DeleteCarFromList(car.id).subscribe((res: any) => {
      this.AllCarsFun();
    });
  }

}






