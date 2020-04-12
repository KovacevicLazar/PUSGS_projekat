import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    id:number;
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; })
  }

  ngOnInit(): void {
  }

}
