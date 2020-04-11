import { Component, OnInit } from '@angular/core';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';


@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  allrentcars: Array<RentCar>;

  constructor(private rentCarService: RentCarService) {
      this.allrentcars = this.rentCarService.loadRentCars();
   }

  ngOnInit(): void {
  }

}
