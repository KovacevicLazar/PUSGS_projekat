import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { 
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
    if(this.Location == "" ||   isNaN(Number(this.NumberOfSeats)) || isNaN(Number(this.PricePerDay)) || this.Brand == "" || this.CarModel == "" ||  isNaN(Number(this.year)) || isNaN(Number(this.Babyseats)) )
    {
      alert("All fields are required! ")
    }
    else
    {
      let newCar = new Car(10,this.Location,"",this.Brand,this.CarModel,Number(this.year),Number(this.PricePerDay),true,Number(this.Babyseats),"");
      this.router.navigate(['/regus/'.concat(this.user.id.toString(),'/myCarList')]);
   
    }
  }

}
