import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user/user';

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

        const u1 = new User(1,"Amar","Gile","gile@yahoo.com","064323232","Sekovici BB", 0, "11");
        const u2 = new User(2,"Joco","Isic","keke@gmail.com","066323112","Begorad",1,"11");
        const u3 = new User(3,"Sanja","Savinovic","sanjci@hotmail.com","222883","Nis",3,"11");

        allUsers.push(u1);
        allUsers.push(u2);
        allUsers.push(u3);

        return allUsers;
    }
}