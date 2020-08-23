import { Component, OnInit,Input } from '@angular/core';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { MatDialog } from '@angular/material/dialog';
import { Car } from 'src/app/entities/car/car';
import { ReservationCarDialogComponent } from '../../reservation-car-dialog/reservation-car-dialog.component';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input() Cars;

  constructor(public dialog: MatDialog,private carservice: RentCarService) { }

  ngOnInit(): void {
  }

  Reserve(car)
  {
   
      this.openDialog(car).afterClosed().subscribe(result => {
        if(result=="Cancel"){
          alert("Podaci nisu menjani.")
        }
        else{
          let newCar= result as ReservedCar;
          //Samo zameniti podatke za flight podacima iz NewFlight
          this.carservice.CarReservation(newCar).subscribe((res:any) =>
          {
            alert("Successfuly reserved!");
          },    (error) => {
            alert("Error,already reserved in this period");
        });
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
