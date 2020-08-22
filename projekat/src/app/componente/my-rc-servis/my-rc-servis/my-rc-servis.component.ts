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
  myrentcar: RentCar = new RentCar(-1,"","","",1);
  
  id : number;
  user: User;

  
  constructor(private rentcarService: RentCarService  ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    this.rentcarService.GetCompanyInfo().subscribe((res:any)=> {
      this.myrentcar.address = res.comp.adress;
      this.myrentcar.name = res.comp.companyName;
      this.myrentcar.description = res.comp.description;
      this.myrentcar.id = res.comp.id;

    })
  }

  ngOnInit(): void {
  }

  ChangeInfos()
  {
    this.rentcarService.SaveChangeInfo(this.myrentcar).subscribe((res:any)=>{
      this.router.navigate(['myCarList'])
      alert("Successfuly saved ! ")
    });
    
  }

  check() // mora da se mijenja
  {
    const userRole = JSON.parse(localStorage.getItem('sessionUserRole'));
    if(userRole === 'Registred')
    {
      return true;
    }
    else
      return false; 
  }


  

}
