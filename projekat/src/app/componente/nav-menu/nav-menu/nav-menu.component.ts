import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() user;
  
  constructor() { }

  ngOnInit(): void {
  }

  Logout()
  {
    localStorage.removeItem('sessionUserRole');
  }

}
