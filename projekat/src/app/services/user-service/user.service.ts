import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user/user';
import { Flight } from 'src/app/entities/flight/flight';

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

        const u1 = new User(1,"Petar","Vlacic","pera@gmail.com","065222272","Mostar", 0, "123");
        const u2 = new User(2,"Helena","Isic","helena@yahoo.com","066323112","Beograd",1,"111");
        const u3 = new User(3,"Milos","Krasic","milos@hotmail.com","064373221","Nis",2,"321");
        const u4 = new User(4,"Jovana","Cojic","superadmin@hotmail.com","065493515","Novi Sad",3,"222883");
        const u5 = new User(5,"David","Milosevic","daki@gmail.com","062323112","Sekovici",0,"444");
        const u6 = new User(6,"Sofija","Glisic","sofija@yahoo.com","065678323","Trnovo",1,"11111");

        u1.friendsRequests.push(u2);
        u1.friendsRequests.push(u6);
        

        u1.friends.push(u3);
        u1.friends.push(u4);
        u1.friends.push(u3);
        u1.friends.push(u4);
        u1.friends.push(u3);
        u1.friends.push(u4);
        u1.friends.push(u3);
        u1.friends.push(u4);


        const f1=new Flight(0,"Beograd","Budimpesta",new Date(2020,7,14,10,30,0,0),new Date(2020,7,14,11,30,0,0),110,0,null,250);
        const f2=new Flight(1,"Beograd","Bec",new Date(2020,7,14,12,30,0,0),new Date(2020,7,14,11,30,0,0),210,0,null,330);

        u1.flightReservations.push(f1);
        u1.flightReservations.push(f2);
        u1.flightReservations.push(f1);
        u1.flightReservations.push(f2);

        allUsers.push(u1);
        allUsers.push(u2);
        allUsers.push(u3);
        allUsers.push(u4);
        allUsers.push(u5);
        allUsers.push(u6);

        return allUsers;
    }
}