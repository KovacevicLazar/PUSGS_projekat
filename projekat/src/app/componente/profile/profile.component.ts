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
    
    route.params.subscribe(params => { this.id = params['id']; })
     this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
      }
    });
 
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

}
