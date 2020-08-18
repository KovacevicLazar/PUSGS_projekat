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

  
  onSubmit() 
  {
    
      let emailExist = false;
      this.allUsers.forEach(element => {

        if(element.email===this.email){
          emailExist=true;
          if(element.password===this.password){

            localStorage.setItem("UserEmail",JSON.stringify(element.email)); //

            if(element.role===Role.Registred){
              this.router.navigate(['/profile']);
              localStorage.setItem("sessionUserRole",JSON.stringify('Registred'));
            }
            else if(element.role===Role.SystemAdmin){
              this.router.navigate(['/all-airline']);
              localStorage.setItem("sessionUserRole",JSON.stringify('SystemAdmin'));
            }
            else if(element.role===Role.CarAdmin){
              this.router.navigate(['/myCarList']);
              localStorage.setItem("sessionUserRole",JSON.stringify('CarAdmin'));
            }
            else if(element.role===Role.AirlineAdmin){
              this.router.navigate(['/myFlightList']);
              localStorage.setItem("sessionUserRole",JSON.stringify('AirlineAdmin'));
            }
          }
          else{
            alert("Password incorrect");
          }
        } 

      });
      if(!emailExist){
        alert("Email incorrect");
      }

  }

}
