import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;
  
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
   }

  ngOnInit(): void {
  }
  saveChanges() : void{
    if(this.user.name.trim()=="" || this.user.surname.trim()=="" || this.user.address.trim()=="" || this.user.email.trim()=="" || this.user.password.trim()==""){
      alert('Obavezna polja moraju biti popunjena');
    }
    else{
      this.userService.loadUsers().forEach(element => {
        if(element.email==this.user.email && element.id!=this.user.id){
          alert('Ovu email adresu koristi drugi korisnik');
        }
      });
    }
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
