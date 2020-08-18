import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { element } from 'protractor';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    id:number;
    user: User;
    SearchFriend = "";
    OtherUser = new Array<User>()
    temp:boolean

    FilteredFriend= new Array<User>();
    FilteredFriendRequest= new Array<User>();
    FilteredFriendSentRequest= new Array<User>();
    FilteredOtherUsers= new Array<User>();

  constructor(private userService :UserService,private route: ActivatedRoute) { 
    if(this.check())
    {
      this.FindUserWithUserEmail(); // ako je korisnik ulogovan pronadji ga pomocu mejla
    }

    this.userService.loadUsers().forEach(element1 => {
      this.temp=false;

      this.user.friends.forEach(element => {
        if(element1.id==element.id){
          this.temp=true;
        }
      });

      this.user.friendsRequests.forEach(element => {
        if(element1.id==element.id){
          this.temp=true;
        }
      });

      if(!this.temp && element1.role==0){ //Samo obicnim korisnicima se moze slati zahtev
        this.OtherUser.push(element1);
      }

    });

  }

  ngOnInit(): void {
  }

  AcceptFriendRequest(friend: User){
    if(this.FilteredFriendRequest.length!=0){

      this.FilteredFriend.push(friend);
      this.FilteredFriendRequest.forEach((element, index) => {
        if(element.id==friend.id){
          this.FilteredFriendRequest.splice(index,1);
        }
      });

      this.user.friends.push(friend);
      this.user.friendsRequests.forEach((element, index) => {
        if(element.id==friend.id){
          this.user.friendsRequests.splice(index,1);
        }
      });

    }
    else{
      this.user.friends.push(friend);
      this.user.friendsRequests.forEach((element, index) => {
        if(element.id==friend.id){
          this.user.friendsRequests.splice(index,1);
        }
      });
    }
  }

  RemoveFriend(friend: User){
    if(this.FilteredFriend.length!=0){

      this.FilteredFriend.forEach((element, index) => {
        if(element.id==friend.id){
          this.FilteredFriend.splice(index,1);
          this.FilteredOtherUsers.push(friend);
        }
      });
      
      this.user.friends.forEach((element, index) => {
        if(element.id==friend.id){
          this.user.friends.splice(index,1);
          this.OtherUser.push(friend);
        }
      });

    }
    else{
      this.user.friends.forEach((element, index) => {
        if(element.id==friend.id){
          this.user.friends.splice(index,1);
          this.OtherUser.push(friend);
        }
      });
    }
  }

  DeleteRequest(friend){

    if(this.FilteredFriendRequest.length!=0){

      this.FilteredFriendRequest.forEach((element, index) => {
        if(element.id==friend.id){
          this.FilteredFriendRequest.splice(index,1);
          this.FilteredOtherUsers.push(friend);
        }
      });

      this.user.friendsRequests.forEach((element, index) => {
        if(element.id==friend.id){
          this.user.friendsRequests.splice(index,1);
          this.OtherUser.push(friend);
        }
      });

    }
    else{

      this.user.friendsRequests.forEach((element, index) => {
      if(element.id==friend.id){
        this.user.friendsRequests.splice(index,1);
        this.OtherUser.push(friend);
      }
      });
    
    }
  }

  SendRequest(user){
    
    if(this.FilteredOtherUsers.length!=0){

      this.FilteredOtherUsers.forEach((element, index) => {
        if(element.id==user.id){
          this.FilteredOtherUsers.splice(index,1);
          this.FilteredFriendSentRequest.push(user);
        }
      });

      this.OtherUser.forEach((element, index) => {
        if(element.id==user.id){
          this.OtherUser.splice(index,1);
          this.user.friendsSentRequests.push(user);
        }
      });
    }
    else{
      this.OtherUser.forEach((element, index) => {
        if(element.id==user.id){
          this.OtherUser.splice(index,1);
          this.user.friendsSentRequests.push(user);
        }
      });
    }
   
  }

  CancelRequest(user){

    if(this.FilteredFriendSentRequest.length!=0){
      this.FilteredFriendSentRequest.forEach((element, index) => {
        if(element.id==user.id){
          this.FilteredFriendSentRequest.splice(index,1);
          this.FilteredOtherUsers.push(user);
        }
      });

      this.user.friendsSentRequests.forEach((element, index) => {
        if(element.id==user.id){
          this.user.friendsSentRequests.splice(index,1);
          this.OtherUser.push(user);
        }
      });
    }
    else{
      this.user.friendsSentRequests.forEach((element, index) => {
        if(element.id==user.id){
          this.user.friendsSentRequests.splice(index,1);
          this.OtherUser.push(user);
        }
      });
    }
   
  }

  Search(){
    this.FilteredFriend.length=0;
    this.FilteredOtherUsers.length=0;
    this.FilteredFriendSentRequest.length=0;
    this.FilteredFriendRequest.length=0;


    if(this.SearchFriend==""){
      alert("Neuspesna pretraga")
      this.FilteredFriend.length=0;
      this.FilteredOtherUsers.length=0;
      this.FilteredFriendSentRequest.length=0;
      this.FilteredFriendRequest.length=0;
      return;
    }

    this.user.friends.forEach((element, index) => {
      let NameAndSurname=element.name.toUpperCase() + ' ' +  element.surname.toUpperCase();
      if(NameAndSurname.includes(this.SearchFriend.toUpperCase())){
        this.FilteredFriend.push(element);
      }
    });

    this.user.friendsSentRequests.forEach((element, index) => {
      let NameAndSurname=element.name.toUpperCase() + ' ' +  element.surname.toUpperCase();
      if(NameAndSurname.includes(this.SearchFriend.toUpperCase())){
        this.FilteredFriendSentRequest.push(element);
      }
    });

    this.user.friendsRequests.forEach((element, index) => {
      let NameAndSurname=element.name.toUpperCase() + ' ' +  element.surname.toUpperCase();
      if(NameAndSurname.includes(this.SearchFriend.toUpperCase())){
        this.FilteredFriendRequest.push(element);
      }
    });

    this.OtherUser.forEach((element, index) => {
      let NameAndSurname=element.name.toUpperCase() + ' ' +  element.surname.toUpperCase();
      if(NameAndSurname.includes(this.SearchFriend.toUpperCase())){
        this.FilteredOtherUsers.push(element);
      }
    });

    if(this.FilteredFriend.length==0 && this.FilteredFriendRequest.length==0 && this.FilteredFriendSentRequest.length==0 && this.FilteredOtherUsers.length==0){
      alert("Nije pronadjen ni jedan korisnik")
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
