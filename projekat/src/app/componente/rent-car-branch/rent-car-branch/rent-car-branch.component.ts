
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';

@Component({
  selector: 'app-rent-car-branch',
  templateUrl: './rent-car-branch.component.html',
  styleUrls: ['./rent-car-branch.component.css']
})
export class RentCarBranchComponent implements OnInit {

  public rentcarId;
  public branches ="";
  allrentcars: Array<RentCar>;

  constructor(private rentCarService: RentCarService,private route: ActivatedRoute) { 

    this.allrentcars = this.rentCarService.loadRentCars();

    let id = parseInt(this.route.snapshot.paramMap.get('idRC'));
    this.rentcarId = id;


    // this.allrentcars.forEach(element =>{
    //   if(element.id == this.rentcarId)
    //   {
    //        this.branches = element.branches;
    //   }
    // })
    
  }

  ngOnInit(): void {
  }

}
