import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './componente/nav-menu/nav-menu/nav-menu.component';
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';

import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';
import { AirlineFilteredComponent } from './componente/airline-table/airline-filtered.component';
import { RentACarFilteredComponent } from './componente/rent-a-car-filtered/rent-a-car-filtered/rent-a-car-filtered.component';
import { SignUpComponent} from './componente/sign-up/sign-up/sign-up.component';
import { from } from 'rxjs';
import { RegisteredUserComponent } from './componente/registered-user/registered-user.component';

import { ProfileComponent } from './componente/profile/profile.component';
import { StartingPageNavMenuComponent } from './componente/starting-page-nav-menu/starting-page-nav-menu.component';

import { PageNotFoundComponent } from './componente/page-not-found/page-not-found/page-not-found.component';
import { RentCarDescriptionComponent } from './componente/rent-car-description/rent-car-description/rent-car-description.component';
import { AirlineDescriptionComponent } from './componente/airline-description/airline-description.component';
import { FlyghtsTableComponent } from './componente/flyghts-table/flyghts-table.component';
import { CarTableComponent } from './componente/car-table/car-table/car-table.component';
import { AddAirlineComponent } from './componente/add-airline/add-airline/add-airline.component';
import { AddRcServisComponent } from './componente/add-rc-servis/add-rc-servis/add-rc-servis.component';
import { SeatReservationComponent } from './componente/seat-reservation/seat-reservation.component';
import { ReservedSeatDialogComponent } from './componente/reserved-seat-dialog/reserved-seat-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryOfReservationComponent } from './componente/history-of-reservation/history-of-reservation.component';
import { AirlineDestinationsComponent } from './componente/airline-destinations/airline-destinations/airline-destinations.component';
import { RentCarBranchComponent } from './componente/rent-car-branch/rent-car-branch/rent-car-branch.component';




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
    ProfileComponent,
    StartingPageNavMenuComponent,   
    PageNotFoundComponent,
    RentCarDescriptionComponent,
    AirlineDescriptionComponent,
    FlyghtsTableComponent,
    CarTableComponent,
    AddAirlineComponent,
    AddRcServisComponent,
    SeatReservationComponent,
    ReservedSeatDialogComponent,
    HistoryOfReservationComponent,
    AirlineDestinationsComponent,
    RentCarBranchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    ReservedSeatDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
