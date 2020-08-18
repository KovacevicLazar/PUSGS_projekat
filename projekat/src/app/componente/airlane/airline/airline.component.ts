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
    
    if(this.check())
    {
      this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
      this.RegistratedUser =1;
    }

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
    }
    else{
      this.SearchButtonClicket=1;
      this.Flights.length = 0;

      //let dateDepart=new Date(this.dateDepart);
      //let dateReturn=new Date(this.dateReturn);
    
      this.allAirline.forEach(airline => {
        airline.flights.forEach(flight => {
         
          let month=""; 
          if(flight.dateDepart.getMonth() < 9){ //za mesece manje od 10(9 jer je januar 0) dodaj 0 ispred..npr avgust->08
            month="0" + (flight.dateDepart.getMonth()+1).toString(); // +1 jer je januar 0
          }
          else{
            month=(flight.dateDepart.getMonth()+1).toString();
          }
        
         let flightDateDepart=flight.dateDepart.getFullYear().toString() + '-' + month + '-' + flight.dateDepart.getDate().toString(); //DOBIJEMO STRING "YYYY-MM-DD"
         if(flightDateDepart===this.dateDepart){
            if(flight.flyingfrom.toLowerCase() == this.flyingfrom.toLowerCase() && flight.flyingTo.toLowerCase() == this.flyingTo.toLowerCase() ){
              if(flight.vacantSeats >= (Number(this.adults) + Number(this.children))){
                this.Flights.push(flight);
              }
          }
         }

        });
      });
    }
  }

  check()
  {
    const userRole = JSON.parse(localStorage.getItem('sessionUserRole'));
    if(userRole === 'Registred')
    {
      return true;
    }
    else
      return false; 
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
