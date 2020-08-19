import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { Car } from 'src/app/entities/car/car';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';

@Component({
  selector: 'app-history-of-reservation',
  templateUrl: './history-of-reservation.component.html',
  styleUrls: ['./history-of-reservation.component.css']
})
export class HistoryOfReservationComponent implements OnInit {

  user :User;
  DateNow : Date;

  constructor(private userService: UserService ,private route: ActivatedRoute) { 
    if(this.check())
    {
      this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
    }
    this.DateNow= new Date();
  }

  ngOnInit(): void {
  }

  buttonCancellationsCarReservation(reservedCar :  ReservedCar){
    this.DateNow= new Date();
    if(this.calculateHours(reservedCar.checkedInDate,this.DateNow) < 2){
      alert("Ne mozete odustati od ove rezervacije.Ostalo je manje od 2 dana do pocetka rezervacije.")
    }
    else{
      //OVDE TREBA UKLONITI LET IZ LISTE REZERVISANIH LETOVA
    }
  }

  buttonCancellations(flight : Flight){
    this.DateNow= new Date();
    if(this.calculateHours(flight.dateDepart,this.DateNow) < 3){
      alert("Ne mozete odustati od ove rezervacije.Ostalo je manje od 3 sata do pocetka leta.")
    }
    else{
      //OVDE TREBA UKLONITI LET IZ LISTE REZERVISANIH LETOVA
    }

  }
  calculateDays(dateArrival: Date,dateDepart: Date): number
  {
    var msec = dateArrival.getTime() - dateDepart.getTime();
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    
    return days;
  }

  calculateHours(dateArrival: Date,dateDepart: Date): number
  {
    var msec = dateArrival.getTime() - dateDepart.getTime();
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    
    return hrs;
  }

  buttonAccept(){

  }

  buttonReject(){
    
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
