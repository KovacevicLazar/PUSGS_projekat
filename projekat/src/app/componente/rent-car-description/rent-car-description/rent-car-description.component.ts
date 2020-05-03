import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';

@Component({
  selector: 'app-rent-car-description',
  templateUrl: './rent-car-description.component.html',
  styleUrls: ['./rent-car-description.component.css']
})
export class RentCarDescriptionComponent implements OnInit {

  public rentcarId;
  public description ="";
  allrentcars: Array<RentCar>;

  constructor(private rentCarService: RentCarService,private route: ActivatedRoute) {
    this.allrentcars = this.rentCarService.loadRentCars();
    let id = parseInt(this.route.snapshot.paramMap.get('rentcarId'));
    this.rentcarId = id;

    this.allrentcars.forEach(element =>{
      if(element.id == this.rentcarId)
      {
           this.description = element.description;
      }
    })
   }

  ngOnInit(): void {
   
  }

}
