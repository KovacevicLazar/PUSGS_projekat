import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { Car } from 'src/app/entities/car/car';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';
import { ReservedFlight } from 'src/app/entities/ReservedFlight/reserved-flight';
import { RentCarService } from 'src/app/services/rent-a-car-service/rent-a-car-service';
import { AirlineService } from 'src/app/services/airline-service/airline.service';

@Component({
  selector: 'app-history-of-reservation',
  templateUrl: './history-of-reservation.component.html',
  styleUrls: ['./history-of-reservation.component.css']
})
export class HistoryOfReservationComponent implements OnInit {

  user :User;
  DateNow : Date;
  allReservations: Array<ReservedCar> = new Array<ReservedCar>();

  flightReservations = new Array<ReservedFlight>();
  flightReservationsRequests = new Array<ReservedFlight>();

  constructor(private userService: UserService ,private route: ActivatedRoute,private rentCarService: RentCarService, private airlineService: AirlineService) { 
  
    this.GetReservationsCar();
    this.GetFlightReservations();
    this.GetSeatReservationRequests();
    this.DateNow= new Date();
  }

  GetFlightReservations(){
    this.flightReservations.length = 0;
    this.userService.GetFlightReservations().subscribe((res:any) =>{
      for (let i = 0; i < res.reservations.length; i++) {
           var flight = new Flight(res.reservations[i].flight.id,res.reservations[i].flight.flyingFrom, res.reservations[i].flight.flyingTo, new Date(res.reservations[i].flight.dateDepart),new Date(res.reservations[i].flight.dateArrival), res.reservations[i].flight.flightDistance, new Array<string>(), res.reservations[i].flight.ticketPrice, res.reservations[i].flight.vacantSeats, res.reservations[i].flight.busySeats);
           var numOFSeats = res.reservations[i].numberOfSeats
           var resFlight = new ReservedFlight(flight, numOFSeats);
           this.flightReservations.push(resFlight);
        }
    });
  }

  GetReservationsCar()
  {
    this.allReservations.length = 0;
    this.userService.GetCarReservations().subscribe((res:any) =>{
      for (let i = 0; i < res.reservations.length; i++) {
        var newcar  = new Car(-1,res.reservations[i].location,res.reservations[i].brand,res.reservations[i].model,-1,-1,false,-1,-1);
        var reservation = new ReservedCar(newcar,res.reservations[i].numberOfDays,res.reservations[i].pickupDate,res.reservations[i].returnDate);
        reservation.totalPrice  = res.reservations[i].totalPrice;
        reservation.id = res.reservations[i].id;
        this.allReservations.push(reservation);

      }
  });
  }
  ngOnInit(): void {
  }

  GetSeatReservationRequests(){
    this.flightReservationsRequests.length=0;
    this.userService.GetSeatReservationRequests().subscribe((res:any) =>{
      for (let i = 0; i < res.reservations.length; i++) {
        var flight = new Flight(res.reservations[i].flight.id,res.reservations[i].flight.flyingFrom, res.reservations[i].flight.flyingTo, new Date(res.reservations[i].flight.dateDepart),new Date(res.reservations[i].flight.dateArrival), res.reservations[i].flight.flightDistance, new Array<string>(), res.reservations[i].flight.ticketPrice, res.reservations[i].flight.vacantSeats, res.reservations[i].flight.busySeats);
        var numOFSeats = res.reservations[i].numberOfSeats
        var resFlight = new ReservedFlight(flight, numOFSeats);
        resFlight.status=res.reservations[i].status;
        this.flightReservationsRequests.push(resFlight);
      }
    });
  }

  buttonCancellationsCarReservation(reservedCar :  ReservedCar){
    this.DateNow= new Date();
    if(this.calculateHours(reservedCar.checkedInDate,this.DateNow) < 48 ){
      alert("Ne mozete odustati od ove rezervacije.Ostalo je manje od 2 dana do pocetka rezervacije.")
    }
    else{
      this.rentCarService.CancelCarReservation(reservedCar.id).subscribe((res:any)=>{
        alert("Successfuly canceled!")
        this.GetReservationsCar();
      });
    }
  }

  buttonCancellations(flight : Flight){
    this.DateNow= new Date();
    if(this.calculateHours(flight.dateDepart,this.DateNow) < 3){
      alert("Ne mozete odustati od ove rezervacije.Ostalo je manje od 3 sata do pocetka leta.")
    }
    else{
      this.airlineService.CancelFlightReservation(flight.id).subscribe((res:any)=>{
        alert("Successfuly canceled!")
        this.GetFlightReservations();
      });
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

  buttonAccept(flight : Flight){
    this.airlineService.AcceptReservationRequests(flight).subscribe((res:any) =>{
      this.GetSeatReservationRequests();
    });
  }

  buttonReject(flight : Flight){
    this.DateNow= new Date();
    if(this.calculateHours(flight.dateDepart,this.DateNow) < 3){
      alert("Ne mozete odustati od ove rezervacije.Ostalo je manje od 3 sata do pocetka leta.")
    }
    else{
      this.airlineService.RejectReservationRequests(flight).subscribe((res:any) =>{
        this.GetSeatReservationRequests();
      });
    }
  }
}
