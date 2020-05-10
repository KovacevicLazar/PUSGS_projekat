import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { NgForm } from '@angular/forms';
import { RouterModule,Router }  from '@angular/router';

@Component({
  selector: 'app-add-rent-a-car',
  templateUrl: './add-rent-a-car.component.html',
  styleUrls: ['./add-rent-a-car.component.css']
})
export class AddRentACarComponent implements OnInit {

  allRentCars : Array<RentCar>;
  public name="";
  public address="";
  public mark;
  public availableCars ="";
  public description="";
  

  constructor(private rentcarService : RentCarService,private router :Router) {
    this.allRentCars = this.rentcarService.loadRentCars();
  }
 

  ngOnInit(): void {
  }

  onSubmit()
  {

    let temp = true;
    this.allRentCars.forEach(element =>{
      if(element.name === this.name)
      {       
          alert("This Rent a car servce alreaddy exists");   
          temp = false;                               
      }                    
    })

    if(temp)
    {
      //let newRentCar = new  RentCar(6,this.name,this.address,this.description,this.mark,this.availableCars);
      //this.allRentCars.push(newRentCar);
      alert("Uspjesno ste dodali novi Rent a Car servis");
      

    }
  }

}
