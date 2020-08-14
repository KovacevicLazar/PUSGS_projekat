import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/entities/flight/flight';

@Component({
  selector: 'app-change-flight',
  templateUrl: './change-flight.component.html',
  styleUrls: ['./change-flight.component.css']
})
export class ChangeFlightComponent implements OnInit {

  flight:Flight;
  
  id: number;
 
  FlyingFrom="";
  FlyingTo ="";
  DateDepart ="";
  DateArrival ="";
  FirstStop ="";
  SecondStop ="";
  ThirdStop="";
  TicketPrice ="";
  FlightLength="";
  constructor(public dialogRef: MatDialogRef<ChangeFlightComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
      this.flight=this.data.flight
      this.FlyingFrom=this.flight.flyingfrom;
      this.FlyingTo=this.flight.flyingTo;
      this.DateDepart=this.flight.dateDepart.toString();
      this.DateArrival=this.flight.dateArrival.toString();
      let cnt=0;
      for (let i of this.flight.Transitlocations){
        if(cnt==0){
          this.FirstStop=i;
          cnt++;
        }
        else if(cnt==1){
          this.SecondStop=i;
          cnt++
        }
        else{
          this.ThirdStop=i;
        }
      }
      this.TicketPrice=this.flight.ticketPrice.toString();
      this.FlightLength=this.flight.flightDistance.toString();
    }

  ngOnInit(): void {
  }

  Submit(){
    if(this.FlyingFrom!="" && this.FlyingTo!="" && this.DateDepart!="" && this.DateArrival!="" && this.FlightLength!="" && !isNaN(Number(this.FlightLength)) && !isNaN(Number(this.TicketPrice))){
      
      let transitList= new Array<string>();
      let numberOfStops=0;
      if(this.FirstStop !=""){
        transitList.push(this.FirstStop);
        numberOfStops++;
      }
      if(this.SecondStop!=""){
        transitList.push(this.SecondStop);
        numberOfStops++;
      }
      if(this.ThirdStop!=""){
        transitList.push(this.ThirdStop);
        numberOfStops++;
      }
      
      let flight= new  Flight(this.flight.id,this.FlyingFrom,this.FlyingTo,new Date(this.DateDepart),new Date(this.DateArrival),Number(this.FlightLength),numberOfStops,transitList,Number(this.TicketPrice));
     
      this.dialogRef.close(flight)
    }
    else{
      alert("Podaci nisu dobro uneti");
    }
  }
  
  Cancel(){
    this.dialogRef.close("Cancel");
  }
}
