import { Component, OnInit } from '@angular/core';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  allrentcars: Array<RentCar>;
  id : number;
  constructor(private rentCarService: RentCarService, private route: ActivatedRoute) {
      this.allrentcars = this.rentCarService.loadRentCars();
      route.params.subscribe(params => { this.id = params['id']; })
   }



  ngOnInit(): void {
  }

}
