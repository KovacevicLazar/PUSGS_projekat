import { Component, OnInit,Input } from '@angular/core';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { MatDialog } from '@angular/material/dialog';
import { Car } from 'src/app/entities/car/car';
import { ReservationCarDialogComponent } from '../../reservation-car-dialog/reservation-car-dialog.component';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input() Cars;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Reserve(car)
  {
    this.openDialog(car).afterClosed().subscribe(result => {
      if(result=="Cancel"){
        alert("Podaci nisu menjani.")
      }
      else{
        let newCar= result as Car;
        //Samo zameniti podatke za flight podacima iz NewFlight
      
      }
    }); 
  }

  openDialog(car1: Car): any{
    return this.dialog.open(ReservationCarDialogComponent, {
      disableClose: true,
      data:{
         car : car1,
        }
    });
  }

}
