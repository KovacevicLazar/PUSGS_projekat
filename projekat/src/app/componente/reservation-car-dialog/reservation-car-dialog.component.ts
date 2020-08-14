import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/entities/car/car';

@Component({
  selector: 'app-reservation-car-dialog',
  templateUrl: './reservation-car-dialog.component.html',
  styleUrls: ['./reservation-car-dialog.component.css']
})
export class ReservationCarDialogComponent implements OnInit {

  car: Car;
  

  constructor(public dialogRef: MatDialogRef<ReservationCarDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.car = this.data.car;

  }

  ngOnInit(): void {
  }

}
