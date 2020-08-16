import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { ReservedFlight } from 'src/app/entities/ReservedFlight/reserved-flight';
import { Car } from 'src/app/entities/car/car';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor() {}

    loadUsers(){
        console.log("Ucitavanje svih korisnika...");
        return this.mockedUsers();
    }

    mockedUsers(): Array<User>{
        let allUsers = new Array<User>();

        const u1 = new User(1,"Petar","Vlacic","obican1@gmail.com","065222272","Mostar", 0, "obican1");
        const u2 = new User(2,"David","Milosevic","obican2@gmail.com","062323112","Sekovici",0,"obican2");
        const u3 = new User(3,"Novi","nOVIc","obican3@gmail.com","065678323","Trnovo",0,"obican3");
        const u4 = new User(4,"Petar","Vlacic","obican4@gmail.com","065222272","Mostar", 0, "obican4");
        const u5 = new User(5,"David","Milosevic","obican5@gmail.com","062323112","Sekovici",0,"obican5");
        const u6 = new User(6,"Novi","nOVIc","obican6@gmail.com","065678323","Trnovo",0,"obican6");
        const u7 = new User(7,"Helena","Isic","caradmin1@gmail.com","066323112","Beograd",1,"caradmin1");
        const u8 = new User(8,"Sofija","Glisic","caradmin2@gmail.com","065678323","Trnovo",1,"caradmin2");
        const u9 = new User(9,"Milos","Krasic","avioadmin1@gmail.com","064373221","Nis",2,"avioadmin1");
        const u10 = new User(10,"Jovana","Cojic","superadmin@gmail.com","065493515","Novi Sad",3,"superadmin");
        
        
        

        u1.friendsRequests.push(u2);
        u1.friendsRequests.push(u3);
        

        u1.friends.push(u4);
        u1.friends.push(u5);
       

        const f1=new Flight(0,"Beograd","Budimpesta",new Date(2020,7,14,9,30,0,0),new Date(2020,7,14,11,30,0,0),110,0,null,250);
        const f2=new Flight(1,"Beograd","Bec",new Date(2020,7,14,12,30,0,0),new Date(2020,7,14,11,30,0,0),210,0,null,330);
        const FlightReserved1= new ReservedFlight(f1,new Array("A2", "A3"),"obican1@gmail.com");
        const FlightReserved2= new ReservedFlight(f2,new Array("A2", "A3"),"obican1@gmail.com");

        const c1 = new Car(1,"Sekovici","Solunska 5","Audi","A7",2017,198,true,1,"Yes");
        const c2 = new Car(2,"Tokio","New Street 22","Golf","5",2010,220,true,2,"Yes");
        const CarReserved1 = new ReservedCar(c1,5,"obican1@gmail.com",new Date(2020,7,14,12,30,0,0),"Sarajevo",new Date(2020,7,14,12,30,0,0));
        const CarReserved2 = new ReservedCar(c2,3,"obican1@gmail.com",new Date(2020,8,14,12,30,0,0),"Loznica",new Date(2020,8,16,12,30,0,0));

        u1.flightReservations.push(FlightReserved1);
        u1.flightReservations.push(FlightReserved2);
        u2.flightReservations.push(FlightReserved1);
        u2.flightReservations.push(FlightReserved2);
        u1.carReservations.push(CarReserved1);
        u1.carReservations.push(CarReserved2);

        u1.RequestsflightReservation.push(FlightReserved1);
        u1.RequestsflightReservation.push(FlightReserved2);

        allUsers.push(u1);
        allUsers.push(u2);
        allUsers.push(u3);
        allUsers.push(u4);
        allUsers.push(u5);
        allUsers.push(u6);
        allUsers.push(u7);
        allUsers.push(u8);
        allUsers.push(u9);
        allUsers.push(u10);

       

        return allUsers;
    }
}