import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginModel}from 'src/app/entities/loginModel/login-model'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  allUsers : Array<User>;

  user : LoginModel = {
    email: '',
    password: '',
  };

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });


  constructor(private userService : UserService, private fb: FormBuilder) {
     this.allUsers=userService.loadUsers();
   }

  ngOnInit(): void {
  }

  
  singIn() : void{
    this.user=this.loginForm.value;
     this.allUsers.forEach(element => {
       if(element.email===this.user.email){
         console.log("Uspesno logovanje")
       }
     });
  }

}
