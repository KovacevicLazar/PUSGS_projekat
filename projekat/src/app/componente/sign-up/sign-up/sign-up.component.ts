import { Component, OnInit } from '@angular/core';
import{ User} from 'src/app/entities/User/user';
import { Role} from 'src/app/entities/Enums/role.enum';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SingUp() : void{
      
    let newUser = new User("name","surname","email","phonenumber","city",Role.Registred,"password");
    console.log('Logged');

  }

}
