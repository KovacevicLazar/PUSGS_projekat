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

        const u1 = new User("Amar","Gile","gile@yahoo.com","064323232","Sekovici BB", 0);
        const u2 = new User("Joco","Isic","keke@gmail.com","066323112","Begorad",1);
        const u3 = new User("Sanja","Savinovic","sanjci@hotmail.com","222883","Nis",3);

        allUsers.push(u1);
        allUsers.push(u2);
        allUsers.push(u3);

        return allUsers;
    }
}