import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute ) {
    route.params.subscribe(params => { this.id = params['id']; })
     this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
      }
    });
   }

  ngOnInit(): void {
  }

}
