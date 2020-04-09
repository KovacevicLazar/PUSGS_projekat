import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './componente/profile/profile.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component'
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './componente/sign-up/sign-up/sign-up.component';
import {  RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';


const routes: Routes = [

  {
    path: "",
    component: StartingPageComponent
  },
  {
    path: "airline",
    component: AirlineComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
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
