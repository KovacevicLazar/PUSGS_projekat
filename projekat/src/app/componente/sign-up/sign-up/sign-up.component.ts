import { Component, OnInit } from '@angular/core';
import{ User} from 'src/app/entities/User/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { Role} from 'src/app/entities/Enums/role.enum';
import { NgForm } from '@angular/forms';
import { RouterModule,Router }  from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  allUsers: Array<User>;
  public name ="";
  public  surname="";
  public phone ="";
  public address = "";
  public email="";
  public password ="";
  public password2 = "";
  public username = "";


  constructor(private userService: UserService,private router : Router) { 
    this.allUsers = this.userService.loadUsers();
    
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let broj = 1;

    if(this.password !== this.password2)
    {
      alert("The passwords doesnt match please try again");
      
    }
    else
    {
      this.allUsers.forEach(element =>{
        if(element.email === this.email)
        {       
            alert("There is already a user with this e-mail");   
            broj = 2;                         
        }                    
      })

      if(broj == 1)
      {
        let id=4;
        let newUser = new User(id,this.name,this.surname,this.email,this.phone,this.address,Role.Registred,this.password);
        //this.allUsers.push(newUser);
        newUser.username = this.username;
        this.userService.Register(newUser).subscribe((res: any) => {
          this.router.navigate(['/sign-in']);
        });
        
       // console.log('Logged');
      }
      
    }

      
    
    
     
  }


}
