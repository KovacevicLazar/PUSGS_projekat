import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-history-of-reservation',
  templateUrl: './history-of-reservation.component.html',
  styleUrls: ['./history-of-reservation.component.css']
})
export class HistoryOfReservationComponent implements OnInit {

  user :User;

  constructor(private userService: UserService ,private route: ActivatedRoute) { 
    let userid = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.userService.loadUsers().forEach(element => {
      if(element.id==userid){
        this.user=element;
      }
    });
  }

  ngOnInit(): void {
  }

  buttonCancellations(){

  }

  buttonAccept(){

  }

  buttonReject(){
    
  }

}
