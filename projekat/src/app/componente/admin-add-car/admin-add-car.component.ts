import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/entities/car/car';

@Component({
  selector: 'app-admin-add-car',
  templateUrl: './admin-add-car.component.html',
  styleUrls: ['./admin-add-car.component.css']
})
export class AdminAddCarComponent implements OnInit {

  id: number;
  user: User;
 Location ="";
 year :"";
 dateReturn ="";
 PricePerDay="";
 Brand ="";
 NumberOfSeats ="";
 CarModel="";
 Babyseats ="";

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
       
      }

    });
  }

  ngOnInit(): void {
  }

  AddNewCar()
  {
    if(this.Location == "" ||   Number(this.NumberOfSeats) == NaN || Number(this.PricePerDay) == NaN || this.Brand == "" || this.CarModel == "" || Number(this.year) == NaN || Number(this.Babyseats) == NaN)
    {
      alert("All fields are required! ")
    }
    else
    {
      let newCar = new Car(10,this.Location,"",this.Brand,this.CarModel,Number(this.year),Number(this.PricePerDay),true,Number(this.Babyseats),"");
    }
  }

}
