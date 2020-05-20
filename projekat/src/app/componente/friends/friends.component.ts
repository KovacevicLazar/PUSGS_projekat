import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    id:number;
    user: User;
    SearchFriend = "";
    FilteredFriend= new Array<User>();

  constructor(private userService :UserService,private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; })
    this.userService.loadUsers().forEach(element => {
      if(element.id==this.id){
        this.user=element;
      }
    });
  }

  ngOnInit(): void {
  }

  AcceptFriendRequest(friend: User){
    this.user.friends.push(friend);
    this.user.friendsRequests.forEach((element, index) => {
      if(element.id==friend.id){
        this.user.friendsRequests.splice(index,1);
      }
    });
  }

  RemoveFriend(friend: User){
    this.user.friends.forEach((element, index) => {
      if(element.id==friend.id){
        this.user.friends.splice(index,1);
      }
    });
  }

  DeleteRequest(friend){
    this.user.friendsRequests.forEach((element, index) => {
      if(element.id==friend.id){
        this.user.friendsRequests.splice(index,1);
      }
    });
  }

  Search(){
    this.FilteredFriend.length=0;
    if(this.SearchFriend==""){
      alert("Neuspesna pretraga")
      return;
    }
    this.user.friends.forEach((element, index) => {
      let NameAndSurname=element.name.toUpperCase() + ' ' +  element.surname.toUpperCase();
      if(NameAndSurname.includes(this.SearchFriend.toUpperCase())){
        this.FilteredFriend.push(element);
      }
    });
    if(this.FilteredFriend.length==0){
      alert("Neuspesna pretraga")
    }
  }

}
