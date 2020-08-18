import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { Router } from '@angular/router';
import { Airline } from 'src/app/entities/airline/airline';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  allAirlines: Array<Airline>;

  

  public name="";
  public username="";
  public address="";
  public mark;
  public destinations ="";
  public description="";
  ocijena: number;

  constructor(private airlineService: AirlineService,private router: Router) 
  { 
    this.allAirlines = this.airlineService.loadAirlines();
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.ocijena = this.mark;
    let temp = true;
    this.allAirlines.forEach(element =>{
      if(element.name.toUpperCase() === this.name.toUpperCase())
      {       
          alert("This name is taken, a airline with this name already exsists");   
          temp = false;                               
      }    
                   
    })

      if(this.name == "" || this.address == "" || this.username == "")
      {
        alert("You have to fill all fields, invalid request");
        temp = false;
      }   

    if(temp)
    {
      let newAirline = new  Airline(6,this.name,this.address,this.description,this.mark,this.destinations,1,this.username);
      this.allAirlines.push(newAirline);
      alert("The new airline is succesfully added! ");
      this.router.navigate(['/all-airline']);

    }
  }

}


