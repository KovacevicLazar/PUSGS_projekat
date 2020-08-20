import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';
import { ReservedFlight } from 'src/app/entities/ReservedFlight/reserved-flight';
import { Car } from 'src/app/entities/car/car';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    readonly BaseURI = 'http://localhost:51716/api';
    constructor(private http: HttpClient) { }

    loadUsers(){
        console.log("Ucitavanje svih korisnika...");
        return this.mockedUsers();
    }

    Register(newUser: User)
    {
        var body =  {
            name: newUser.name,
            surname: newUser.surname,
            username: newUser.username,
            email: newUser.email,
            PhoneNumber: newUser.phone,
            address: newUser.address,        
            password : newUser.password

        }

        return this.http.post(this.BaseURI + '/User/Register', body);
    }

    Login(password: string,email: string)
    {
        var body ={
            Email : email,
            Password : password 
        }

        return this.http.post(this.BaseURI + '/User/Login', body);
    }


    GetUserProfileInfo(){
        return this.http.get(this.BaseURI + '/User/GetUserProfileInfo');
    }


    SaveProfileInfoChanges(user:User,newpass:string,confnewpass:string){
     
     
        var body = {
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email,
            PhoneNumber: user.phone,
            address: user.address,        
            password : user.password,
            newPassword: newpass,
            confirmPassword: confnewpass

           };
         
        return this.http.post(this.BaseURI + '/User/SaveProfileInfoChanges',body);
    }

    GetOtherUsers(){
        return this.http.get(this.BaseURI + '/User/GetOtherUsers');
    }


    SendRequest(userID: string)
    {
        var body = {
            userId2: userID
        }
        return this.http.post(this.BaseURI + '/User/SendRequest', body);
    }

    AddAdmin(CompanyName: string,Description:string, AdminUsername: string, Address: string,TypeOfCompany: string,Email: string)
    {
        var body = {
            CompanyName: CompanyName,
            Description: Description,
            AdminUsername: AdminUsername,
            Address: Address,
            TypeOfCompany: TypeOfCompany,
            Email: Email

        }

        return this.http.post(this.BaseURI + '/User/AddingAdmin', body);
    }


    GetAirAdmins(){
        return this.http.get(this.BaseURI + '/User/GetAirAdmins');
    }

    GetCarAdmins(){
        return this.http.get(this.BaseURI + '/User/GetCarAdmins');
    }









    mockedUsers(): Array<User>{
        let allUsers = new Array<User>();

        const u1 = new User("","Petar","Vlacic","obican1@gmail.com","065222272","Mostar", 0, "obican1");
        const u2 = new User("","David","Milosevic","obican2@gmail.com","062323112","Sekovici",0,"obican2");
        const u3 = new User("","Novi","nOVIc","obican3@gmail.com","065678323","Trnovo",0,"obican3");
        const u4 = new User("","Petar","Vlacic","obican4@gmail.com","065222272","Mostar", 0, "obican4");
        const u5 = new User("","David","Milosevic","obican5@gmail.com","062323112","Sekovici",0,"obican5");
        const u6 = new User("","Novi","nOVIc","obican6@gmail.com","065678323","Trnovo",0,"obican6");
        const u7 = new User("","Helena","Isic","caradmin1@gmail.com","066323112","Beograd",1,"caradmin1");
        const u8 = new User("","Sofija","Glisic","caradmin2@gmail.com","065678323","Trnovo",1,"caradmin2");
        const u9 = new User("","Milos","Krasic","avioadmin1@gmail.com","064373221","Nis",2,"avioadmin1");
        const u10 = new User("","Jovana","Cojic","superadmin@gmail.com","065493515","Novi Sad",3,"superadmin");
        
        
        

        u1.friendsRequests.push(u2);
        u1.friendsRequests.push(u3);
        

        u1.friends.push(u4);
        u1.friends.push(u5);

        u1.friends.push(u4);
        u1.friends.push(u5);
        u1.friends.push(u4);
        u1.friends.push(u5);
        u1.friends.push(u4);
        u1.friends.push(u5);
       

        const f1=new Flight(0,"Beograd","Budimpesta",new Date(2020,7,19,18,30,0,0),new Date(2020,10,14,11,30,0,0),110,0,null,250);
        const f2=new Flight(1,"Beograd","Bec",new Date(2020,7,19,13,0,0,0),new Date(2020,10,14,11,30,0,0),210,0,null,330);
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