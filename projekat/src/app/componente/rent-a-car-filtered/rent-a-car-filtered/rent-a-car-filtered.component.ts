import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';



@Component({
  selector: 'app-rent-a-car-filtered',
  templateUrl: './rent-a-car-filtered.component.html',
  styleUrls: ['./rent-a-car-filtered.component.css']
})
export class RentACarFilteredComponent implements OnInit {

  @Input() allrentcars;
  @Input() user;
 
  
  
  constructor(private RentACars:RentCarService,private router: Router) { 
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
