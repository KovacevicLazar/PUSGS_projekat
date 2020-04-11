import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './componente/profile/profile.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component'
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './componente/sign-up/sign-up/sign-up.component';
import {  RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';
import { AirlineFilteredComponent } from './componente/airline-filtered/airline-filtered.component';
import { RentACarFilteredComponent} from './componente/rent-a-car-filtered/rent-a-car-filtered/rent-a-car-filtered.component';
import { pathToFileURL } from 'url';


const routes: Routes = [

  {
    path: "",
    component: StartingPageComponent
  },
  {
    path: "airline",
    component: AirlineComponent,
    children:[
      {
        path: "airline-filtered",
        component: AirlineFilteredComponent,
      }
    ]
  },
  {
    path: "airline-filtered",
    component: AirlineFilteredComponent,
  },
  {
    path: "rent-a-car",
    component: RentACarComponent,
    children: [
    {
      path: "rent-a-car-filtered",
      component: RentACarFilteredComponent, 
    }
   ]
  },
  {
    path: "rent-a-car-filtered",
    component: RentACarFilteredComponent, 
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "rent-a-car",
    component: RentACarComponent
  },

  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "friends",
    component: FriendsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
