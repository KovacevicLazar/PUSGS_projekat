import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './componente/profile/profile.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component'
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './componente/sign-up/sign-up/sign-up.component';
import {  RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';
import { AirlineFilteredComponent } from './componente/airline-table/airline-filtered.component';
import { RentACarFilteredComponent} from './componente/rent-a-car-filtered/rent-a-car-filtered/rent-a-car-filtered.component';
import { pathToFileURL } from 'url';
import { RegisteredUserComponent } from './componente/registered-user/registered-user.component';
import { AddRentACarComponent} from './componente/add-rent-a-car/add-rent-a-car/add-rent-a-car.component';
import {PageNotFoundComponent} from './componente/page-not-found/page-not-found/page-not-found.component'
import {RentCarDescriptionComponent} from './componente/rent-car-description/rent-car-description/rent-car-description.component';
import { AirlineDescriptionComponent } from './componente/airline-description/airline-description.component';

const routes: Routes = [
  {
    path: "",
    component: StartingPageComponent
  },
  {
    path: "regus",
    children: [
      { path: "", component: RegisteredUserComponent },
      { path: ":id", component: RegisteredUserComponent},
      { path: ":id/profile", component: ProfileComponent },
      { path: ":id/friends", component: FriendsComponent },
      { path: ":id/airline", component: AirlineComponent },
      {  path: ":id/rent-a-car", component: RentACarComponent},
      { path: ":id/add-rent-a-car", component: AddRentACarComponent}
    ]
  },

  {
    path: "nonregusDesc",
    children: [
      
     { path : ":rentcarId",component: RentCarDescriptionComponent},
     { path : ":airlineId", component: AirlineDescriptionComponent }
    ]
  },
 
 
  {
    path: "airline",
    component: AirlineComponent,
    children: [
      { path: "", component: AirlineComponent },
      { path: ":id", component: RegisteredUserComponent},
      { path: "airline-filtered", component: AirlineFilteredComponent, }
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
    path: "add-rent-a-car",
    component: AddRentACarComponent
  },

  {
    path: "profile",
    children: [
      { path: "", component: ProfileComponent },
      { path: ":id", component: ProfileComponent},
      
    ]
  },
  {
    path: "friends",
    component: FriendsComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
