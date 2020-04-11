import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rent-a-car-filtered',
  templateUrl: './rent-a-car-filtered.component.html',
  styleUrls: ['./rent-a-car-filtered.component.css']
})
export class RentACarFilteredComponent implements OnInit {

  @Input() allrentcars;
  
  constructor() { }

  ngOnInit(): void {
  }

}
