import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Role } from 'src/app/entities/Enums/role.enum';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  allUsers : Array<User>;
  public email="";
  public password="";


  constructor(private userService : UserService,private router : Router) {
     this.allUsers=userService.loadUsers();
   }

  ngOnInit(): void {
  }

  
  onSubmit() {
    this.allUsers.forEach(element => {
      if(element.email===this.email && element.password===this.password){
        if(element.role===Role.Registred){
          this.router.navigate(['/airline']);
        }
        else if(element.role===Role.SystemAdmin){

        }
        else if(element.role===Role.CarAdmin){

        }
        else if(element.role===Role.AirlineAdmin){

        }

      }
      
    });
   
  }

}
