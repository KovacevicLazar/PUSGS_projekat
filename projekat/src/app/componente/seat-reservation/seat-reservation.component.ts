import { Component, OnInit } from '@angular/core';
import { ReservedSeatDialogComponent } from '../reserved-seat-dialog/reserved-seat-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/entities/flight/flight';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA}from '@angular/material/dialog';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {

  
  userData= new Array<string>();


  flight:Flight; 
  id: number;
  
  //variable declarations
  flies:string ="";
  time: string = ""

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8'];
  selected: string[] = [];
  SelectedSeats: string="";

  ticketPrice: number ;
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute, private airlineService : AirlineService, public dialog: MatDialog) {
    let id = parseInt(this.route.snapshot.paramMap.get('flightID'));
    
    airlineService.loadAirlines().forEach(airline => {
      airline.flights.forEach(element => {
        if(element.id==id){
          this.flight=element;
          this.flies="Flies from " + element.flyingfrom.toUpperCase() + ' to ' + element.flyingTo.toUpperCase() + ' with ' + airline.name.toUpperCase();
          this.ticketPrice=element.ticketPrice;
        }
      });
    });
    if(this.flight == null){
     //
    }
  
   }

  ngOnInit(): void {
  }


  //return status of each seat
  getStatus(seatPos: string) {
      if(this.reserved.indexOf(seatPos) !== -1) {
          return 'reserved';
      } else if(this.selected.indexOf(seatPos) !== -1) {
          return 'selected';
      }
  }
  //clear handler
  Back() {
      this.selected = [];
      this.SelectedSeats= this.selected.toString();
  }
  //click handler
  seatClicked(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)
          this.SelectedSeats= this.selected.toString();
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
              this.SelectedSeats= this.selected.toString();
      }
  }
  //Buy button handler
  showSelected = function() {
      if(this.selected.length > 0) {
          alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length));
      } else {
          alert("No seats selected!");
      }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReservedSeatDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
      alert(result);
    });
  }

}
