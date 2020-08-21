import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { User } from 'src/app/entities/user/user';
import { RouterModule,Router }  from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';




@Component({
  selector: 'app-my-rc-servis',
  templateUrl: './my-rc-servis.component.html',
  styleUrls: ['./my-rc-servis.component.css']
})
export class MyRcServisComponent implements OnInit {

 

  allRentcCars: Array<RentCar>;
  myrentcar: RentCar;
  
  id : number;
  user: User;

  
  constructor(private rentcarService: RentCarService  ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    this.allRentcCars = this.rentcarService.loadRentCars();

    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla

    // this.allRentcCars.forEach(element1 =>
    // {
    //   if(this.user.id == element1.adminId)
    //   {
    //     this.myrentcar = element1;
    //   }
    // })
  }

  ngOnInit(): void {
  }

  ChangeInfos()
  {
    this.router.navigate(['/myRCservis/changeInfo']);
  }

  check()
  {
    const userRole = JSON.parse(localStorage.getItem('sessionUserRole'));
    if(userRole === 'Registred')
    {
      return true;
    }
    else
      return false; 
  }

  FindUserWithUserEmail(){
    const userEmail = JSON.parse(localStorage.getItem('UserEmail'));
    this.userService.loadUsers().forEach(element => {
      if(element.email== userEmail){
        this.user=element;
      }
    });
  }

}
