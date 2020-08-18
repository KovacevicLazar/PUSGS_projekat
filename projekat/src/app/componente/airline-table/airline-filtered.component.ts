import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-airline-filtered',
  templateUrl: './airline-filtered.component.html',
  styleUrls: ['./airline-filtered.component.css']
})
export class AirlineFilteredComponent implements OnInit {

  @Input() allAirline;
  @Input() user;
  id: number;
  RegistratedUser : number;

  constructor(private router: Router, private route: ActivatedRoute, private userService : UserService, private Airlines : AirlineService) {

    this.RegistratedUser=0;
    
    if(this.check())
    {
      this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
      this.RegistratedUser =1;
    }

    this.allAirline=Airlines.loadAirlines();
  }

  ngOnInit(): void {
  }

  OnSubmit(airline)
  {
    this.router.navigate(['/airDesc/'.concat(airline.id.toString())]);
  }

  DestDugme(airline)
  {
    this.router.navigate(['/airDest/'.concat(airline.id.toString())]);
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
