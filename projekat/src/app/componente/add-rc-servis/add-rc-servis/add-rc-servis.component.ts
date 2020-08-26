import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { NgForm } from '@angular/forms';
import { RouterModule,Router }  from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

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
  public email ="";
  ocijena: number;

  constructor(private rentcarService : RentCarService,private router :Router,private userService: UserService) {
    this.allRentCars = this.rentcarService.loadRentCars();
  }
 

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.ocijena = this.mark;
   
    if(this.name == "" || this.address == "" || this.username == "" || this.email == "")
    {
      alert("You have to fill all fields, invalid request");
    }   
    else
    {
      this.userService.AddAdmin(this.name,this.description,this.username,this.address,"rentcar",this.email).subscribe((res: any ) =>{
        this.router.navigate(['/all-rc-servis']);
      });
    }
  }
  
}
