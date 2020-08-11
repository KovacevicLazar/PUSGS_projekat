import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { AirlineService } from 'src/app/services/airline-service/airline.service';

@Component({
  selector: 'app-airline-filtered',
  templateUrl: './airline-filtered.component.html',
  styleUrls: ['./airline-filtered.component.css']
})
export class AirlineFilteredComponent implements OnInit {

  @Input() allAirline;
  @Input() user;
  id: number;

  constructor(private router: Router,private Airlines:AirlineService) { 
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
