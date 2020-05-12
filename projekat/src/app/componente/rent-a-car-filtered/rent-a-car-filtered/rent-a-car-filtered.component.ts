import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-rent-a-car-filtered',
  templateUrl: './rent-a-car-filtered.component.html',
  styleUrls: ['./rent-a-car-filtered.component.css']
})
export class RentACarFilteredComponent implements OnInit {

  @Input() allrentcars;
  @Input() user;
 
  
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }
  OnSubmit(rentcars)
  {
      this.router.navigate(['/nonregusDesc',rentcars.id])
  }
  

}
