import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './componente/nav-menu/nav-menu/nav-menu.component';
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';

import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';
import { AirlineFilteredComponent } from './componente/airline-filtered/airline-filtered.component';
import { RentACarFilteredComponent } from './componente/rent-a-car-filtered/rent-a-car-filtered/rent-a-car-filtered.component';
import { SignUpComponent} from './componente/sign-up/sign-up/sign-up.component';
import { from } from 'rxjs';
import { RegisteredUserComponent } from './componente/registered-user/registered-user.component';
import { AdminComponent } from './componente/admin/admin.component';
import { AdminOfAirlineComponent } from './componente/admin-of-airline/admin-of-airline.component';
import { AdminOfRentACarComponent } from './componente/admin-of-rent-a-car/admin-of-rent-a-car.component';
import { ProfileComponent } from './componente/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SignInComponent,
    SignUpComponent,
    StartingPageComponent,
    FriendsComponent,
    AirlineComponent,
    RentACarComponent,
    AirlineFilteredComponent,
    RentACarFilteredComponent,
    RegisteredUserComponent,
    AdminComponent,
    AdminOfAirlineComponent,
    AdminOfRentACarComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
