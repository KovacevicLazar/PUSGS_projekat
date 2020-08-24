import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  
  allAirline : Array<Airline>;
  Flights = new Array<Flight>();
  
  id: number;
  user: User;
  RegistratedUser : number;
  SearchButtonClicket : number;

  flyingfrom ="";
  flyingTo="";
  dateDepart="";
  dateReturn="";
  adults="1"; //Defaul Value
  children="0";
  way="One way";
  clas="Economy class";

  DateNow="";

  constructor(private userService: UserService, private airlineService: AirlineService, private route: ActivatedRoute) { 
    this.RegistratedUser=0;
    this.SearchButtonClicket=0;
    

    this.allAirline = this.airlineService.loadAirlines();

    this.DateNow=this.converStringToDate(new Date());
    this.dateDepart=this.DateNow;
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
    let date1= year + "-"+ j + mount + "-" + day; // + "T" + h + ":" + min;
    return date1;
  }

  filterFlights(): void{

    if(this.dateDepart=="" || (this.dateReturn=="" && this.way=="Round Trip") || this.flyingfrom=="" || this.flyingTo=="")
    {
      alert("Morate uneti polaznu i krajnju destinaciju, kao i datum polaska")
      this.SearchButtonClicket=1;

    }
    else{
      this.SearchButtonClicket=1;
      this.Flights.length = 0;

      let dateDepart=new Date(this.dateDepart);
      let dateReturn: any;
      let dateArr;

      if(this.way != "Round Trip"){
        dateArr="-";
      }
      else{
        dateReturn=new Date(this.dateReturn);
        dateArr=dateReturn.getDate().toString()+ '-' + (dateReturn.getMonth()+1).toString() + '-' + dateReturn.getFullYear().toString();
      }
    
      let dateDep=dateDepart.getDate().toString()+ '-' + (dateDepart.getMonth()+1).toString() + '-' + dateDepart.getFullYear().toString(); 
     
      this.airlineService.GetSearchedFlights(this.flyingfrom, this.flyingTo, dateDep , Number(this.adults) + Number(this.children), dateArr).subscribe((res:any)=>{
    
        for (let i = 0; i < res.retflights.length; i++) {

          let transitList= new Array<string>();

          if(res.retflights[i].firstStop !=""){
            transitList.push(res.retflights[i].firstStop);
          }
          if(res.retflights[i].secondStop!=""){
            transitList.push(res.retflights[i].secondStop);
          }
          if(res.retflights[i].thirdStop!=""){
            transitList.push(res.retflights[i].thirdStop);
          }


          let flight= new Flight(res.retflights[i].id, res.retflights[i].flyingFrom, res.retflights[i].flyingTo, new Date(res.retflights[i].dateDepart),new Date(res.retflights[i].dateArrival), res.retflights[i].flightDistance, transitList, res.retflights[i].ticketPrice, res.retflights[i].vacantSeats, res.retflights[i].busySeats);
          this.Flights.push(flight);
        }
      });
    
    }
  }

}
