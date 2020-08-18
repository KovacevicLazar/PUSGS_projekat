import { Component, OnInit } from '@angular/core';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { never } from 'rxjs';
import { User } from 'src/app/entities/user/user';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';

@Component({
  selector: 'app-list-of-car-companies',
  templateUrl: './list-of-car-companies.component.html',
  styleUrls: ['./list-of-car-companies.component.css']
})
export class ListOfCarCompaniesComponent implements OnInit {
  
  
  AllRentACar :Array<RentCar>=new Array<RentCar>();
  id: number;
  user: User;
  
  constructor(private RentACars:RentCarService,private userService : UserService , private route: ActivatedRoute ) { 
    this.AllRentACar= RentACars.loadRentCars();
    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
  }

  ngOnInit(): void {
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
