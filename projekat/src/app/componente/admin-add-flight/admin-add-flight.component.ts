import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';

@Component({
  selector: 'app-admin-add-flight',
  templateUrl: './admin-add-flight.component.html',
  styleUrls: ['./admin-add-flight.component.css']
})
export class AdminAddFlightComponent implements OnInit {

 
  id: number;
  user: User;
  FlyingFrom="";
  FlyingTo ="";
  DateDepart ="";
  DateArrival="";
  FirstStop ="";
  SecondStop ="";
  ThirdStop="";
  TicketPrice ="";
  FlightLength="";

  DateNow="";

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { 
    
    this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
    

    this.DateNow=this.converStringToDate(new Date());
    this.DateDepart=this.DateNow;
  }

  ngOnInit(): void {
  }

  converStringToDate(date : Date): string
  {
  
    let dateSplit = date.toLocaleString('it-IT').split("/");
    let year=dateSplit[2].split(", ")[0];
    let mount=  dateSplit[1];
    let day=dateSplit[0];
    let h=dateSplit[2].split(", ")[1].split(":")[0];
    let min=dateSplit[2].split(", ")[1].split(":")[1];

    let j=""
    if(mount.length==1){
      j="0" //Ako je mesec <10 dodaj 0 ispred
    }
    let date1= year + "-"+ j + mount + "-" + day  + "T" + h + ":" + min;
    return date1;
  }

  
  AddNewFlight(){

    if(this.FlyingFrom!="" && this.FlyingTo!="" && this.DateDepart!=""  && this.DateArrival!="" && this.FlightLength!="" && !isNaN(Number(this.FlightLength)) && !isNaN(Number(this.TicketPrice))){
      
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
      
      let flight= new  Flight(10,this.FlyingFrom,this.FlyingTo,new Date(this.DateDepart),new Date(this.DateArrival),Number(this.FlightLength),numberOfStops,transitList,Number(this.TicketPrice));
      let s="sdada";
    }
    else{
      alert("Podaci nisu dobro uneti");
    }
  }

  FindUserWithUserEmail(){
    const userEmail = JSON.parse(localStorage.getItem('UserEmail'));
    this.userService.loadUsers().forEach(element => {
      if(element.email== userEmail){
        this.user=element;
      }
    });
  }


}


