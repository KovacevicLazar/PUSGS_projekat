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
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
        this.RegistratedUser=1;
      }

    });
    this.allAirline=Airlines.loadAirlines();
  }

  ngOnInit(): void {
  }

  OnSubmit(airline)
  {
    this.router.navigate(['/nonreg/'.concat(airline.id.toString(),'/airDesc')]);
  }

  DestDugme(airline)
  {
    this.router.navigate(['/nonreg/'.concat(airline.id.toString(),'/airDest')]);
  }

}
