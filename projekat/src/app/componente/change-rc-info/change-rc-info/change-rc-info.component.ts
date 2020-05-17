import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { User } from 'src/app/entities/user/user';
import { RouterModule,Router }  from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-change-rc-info',
  templateUrl: './change-rc-info.component.html',
  styleUrls: ['./change-rc-info.component.css']
})
export class ChangeRcInfoComponent implements OnInit {

  allRentcCars: Array<RentCar>;
  myrentcar: RentCar;
  
  id : number;
  user: User;
  public description ="";
  public branches ="";
  public address ="";
  public name ="";
 

  
  
  

  
  constructor(private rentcarService: RentCarService  ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    this.allRentcCars = this.rentcarService.loadRentCars();
   
    
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
     if(element.id==this.id){
       this.user=element;
     }
   });

    route.params.subscribe(params => { this.id = params['id']; })
      this.userService.loadUsers().forEach(element => {
        if(element.id==this.id){
          this.allRentcCars.forEach(element1 =>
            {
              if(element.id == element1.adminId)
              {
                this.myrentcar = element1;
              }
            })
         
        }
      });
      
  }

  ngOnInit(): void {
  }

  SaveChanges()
  {
    let check = true;
    if(this.name.trim() =="" || this.address.trim() == "" || this.description.trim() =="" || this.branches.trim() == "")
    {
      alert("Sva polja moraju biti popunjena");
       check= false
    }
    if(check)
    {
      //vratiti nazad
    }
  }

}
