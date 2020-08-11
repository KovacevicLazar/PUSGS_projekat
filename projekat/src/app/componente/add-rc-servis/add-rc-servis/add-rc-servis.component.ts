import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { NgForm } from '@angular/forms';
import { RouterModule,Router }  from '@angular/router';

@Component({
  selector: 'app-add-rc-servis',
  templateUrl: './add-rc-servis.component.html',
  styleUrls: ['./add-rc-servis.component.css']
})
export class AddRcServisComponent implements OnInit {

  allRentCars : Array<RentCar>;
  public name="";
  public username="";
  public address="";
  public mark;
  public destinations ="";
  public description="";
  ocijena: number;

  constructor(private rentcarService : RentCarService,private router :Router) {
    this.allRentCars = this.rentcarService.loadRentCars();
  }
 

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.ocijena = this.mark;
    let temp = true;
    this.allRentCars.forEach(element =>{
      if(element.name.toUpperCase() === this.name.toUpperCase())
      {       
          alert("This name is taken, a rent a car service with this name already exsists");   
          temp = false;                               
      }    
                   
    })

      if(this.name == "" || this.address == "" || this.username == "")
      {
        alert("You have to fill all fields, invalid request");
        temp = false;
      }   

    if(temp)
    {
     // let newRentCar = new  RentCar(6,this.name,this.address,this.description,this.mark,this.branches);
      //this.allRentCars.push(newRentCar);
      alert("The new rent a car service is succesfully added! ");
      this.router.navigate(['/regus/4/all-rc-servis']);
      

    }
  }

}
