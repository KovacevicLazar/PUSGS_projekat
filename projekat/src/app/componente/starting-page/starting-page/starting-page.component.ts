import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css']
})
export class StartingPageComponent implements OnInit {

  constructor() {
    localStorage.setItem("sessionUserRole",JSON.stringify("NonRegistred"))
   }

  ngOnInit(): void {
  }

}
