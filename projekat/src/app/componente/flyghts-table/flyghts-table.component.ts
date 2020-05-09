import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flyghts-table',
  templateUrl: './flyghts-table.component.html',
  styleUrls: ['./flyghts-table.component.css']
})
export class FlyghtsTableComponent implements OnInit {
  @Input() Flights;
  constructor() { }

  ngOnInit(): void {
  }

}
