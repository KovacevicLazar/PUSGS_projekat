import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flyghts-table',
  templateUrl: './flyghts-table.component.html',
  styleUrls: ['./flyghts-table.component.css']
})
export class FlyghtsTableComponent implements OnInit {
  @Input() Flights;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SelectFlight(flight){
    this.router.navigate(['/regus/1/airline/' ,flight.id]) 
  }

}
