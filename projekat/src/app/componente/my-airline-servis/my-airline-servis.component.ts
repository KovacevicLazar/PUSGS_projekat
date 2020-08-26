import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline-service/airline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/entities/user/user';
import { Airline } from 'src/app/entities/airline/airline';

@Component({
  selector: 'app-my-airline-servis',
  templateUrl: './my-airline-servis.component.html',
  styleUrls: ['./my-airline-servis.component.css']
})
export class MyAirlineServisComponent implements OnInit {

  airline: Airline;

  constructor(private airlineService: AirlineService ,private router: Router,private route: ActivatedRoute,private userService : UserService) { 

    this.airlineService.GetCompanyInfo().subscribe((res:any)=> {
      this.airline= new Airline(res.comp.id,res.comp.companyName,res.comp.adress,res.comp.description,1,"");
    })
  }

  ngOnInit(): void {
  }

  ChangeInfos()
  {
    if(this.airline.name.trim() != "" && this.airline.address.trim() != "" && this.airline.description.trim() != ""){
      this.airlineService.SaveChangeInfo(this.airline).subscribe((res:any)=>{
        this.router.navigate(['/myFlightList'])
        alert("Successfuly saved ! ")
      });
    }
    else{
      alert("Faild !");
    }
  }

}
