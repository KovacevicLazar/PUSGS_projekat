import { Component, OnInit } from '@angular/core';
import { ReservedSeatDialogComponent } from '../reserved-seat-dialog/reserved-seat-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/entities/flight/flight';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA}from '@angular/material/dialog';
import { Seat } from 'src/app/entities/seat/seat';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {

  
  userData= new Array<string>();


  flight:Flight; 
  user : User;

  
  //variable declarations
  flies:string ="";
  time: string = ""

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];

  reserved = new Array<string>(); //koristimo za prikaz sedista koja su vec bila rezervisana
  reservedSeat : Array<Seat>; //sedista koja smo slektoval(sa podacima o korisniku sedista)

  selected: string[] = []; // pozicija selektovanih sedista
 

  ticketPrice: number ;
  totalPrice: number = 0;

  constructor(private userService : UserService ,private route: ActivatedRoute, private airlineService : AirlineService, public dialog: MatDialog) {
    let flightid = parseInt(this.route.snapshot.paramMap.get('flightID'));
    let userid = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.userService.loadUsers().forEach(element => {
      if(element.id==userid){
        this.user=element;
      }
    });
    
    airlineService.loadAirlines().forEach(airline => {
      airline.flights.forEach(element => {
        if(element.id==flightid){
          this.flight=element;
          this.flies="Flies from " + element.flyingfrom.toUpperCase() + ' to ' + element.flyingTo.toUpperCase() + ' with ' + airline.name.toUpperCase();
          this.ticketPrice=element.ticketPrice;
          this.flight.reservedSeats.forEach(reservedSeat => {
            this.reserved.push(reservedSeat.seatName);
            this.reservedSeat.push(reservedSeat);
          });
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
      this.reservedSeat=[];
  }
  //click handler
  seatClicked(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)

          this.reservedSeat.forEach((element, index) => {
            if(this.reservedSeat[index].seatName==seatPos){
              this.reservedSeat.slice(index,1);
            }
          });

      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1){
            this.openDialog(seatPos).afterClosed().subscribe(result => {
              if(result=="Cancel"){
                alert("Rezervisanje ovog sedista nije uspelo. Pokusajte ponvo.")
              }
              else{
                result= result as Array<string>;
                let seat= new Seat();
                seat.seatName=seatPos;
                seat.nameOfUser=result[0];
                seat.surnameOfUser= result[1];
                seat.passportNumberOfUser= result[2];
                
                this.selected.push(seatPos);
                this.reservedSeat.push(seat);
              }
            });
            
          }
              
      }
  }
  //Buy button handler
  showSelected = function() {
      if(this.selected.length > 0) 
      {
        alert("Reserved Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length) + "€");
        
        this.reservedSeat.forEach(element => {
          this.flight.reservedSeats.push(element);
          //treba menjati i u bazi ovaj let
        });
      } else {
          alert("No seats selected!");
      }
  }

  openDialog(seatPos: string): any{
    return this.dialog.open(ReservedSeatDialogComponent, {
      disableClose: true,
      data:{
         user : this.user,
        }
    });

  }

}
