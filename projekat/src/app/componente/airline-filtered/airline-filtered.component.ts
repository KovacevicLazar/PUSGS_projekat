import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-airline-filtered',
  templateUrl: './airline-filtered.component.html',
  styleUrls: ['./airline-filtered.component.css']
})
export class AirlineFilteredComponent implements OnInit {

  @Input() allAirline;

  constructor() { }

  ngOnInit(): void {
  }

}
