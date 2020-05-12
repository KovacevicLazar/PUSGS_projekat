import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-filtered',
  templateUrl: './airline-filtered.component.html',
  styleUrls: ['./airline-filtered.component.css']
})
export class AirlineFilteredComponent implements OnInit {

  @Input() allAirline;
  @Input() user;
  id: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(airline)
  {
      this.router.navigate(['/nonregusDesc' ,airline.id]) 
  }

}
