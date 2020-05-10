import { Component, OnInit,Input } from '@angular/core';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input() Cars;

  constructor() { }

  ngOnInit(): void {
  }

}
