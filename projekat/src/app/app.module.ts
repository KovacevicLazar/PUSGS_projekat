import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { MyRcServisComponent } from './componente/my-rc-servis/my-rc-servis/my-rc-servis.component';
import { MyCarListComponent } from './componente/my-car-list/my-car-list/my-car-list.component';

import { MyAirlineServisComponent } from './componente/my-airline-servis/my-airline-servis.component';
import { MyFlightListComponent } from './componente/my-flight-list/my-flight-list.component';
import { ListOfAirlinesComponent } from './componente/list-of-airlines/list-of-airlines.component';
import { ListOfCarCompaniesComponent } from './componente/list-of-car-companies/list-of-car-companies.component';
import { AdminAddCarComponent } from './componente/admin-add-car/admin-add-car.component';
import { AdminAddFlightComponent } from './componente/admin-add-flight/admin-add-flight.component';
import { ChangeFlightComponent } from './componente/change-flight/change-flight.component';
import { ReservationCarDialogComponent } from './componente/reservation-car-dialog/reservation-car-dialog.component';
import { AuthInterceptor } from './componente/auth/auth.interceptor';
import { TokenInterceptor } from './componente/auth/tokenInterceptor';
import { UserService } from './services/user-service/user.service';




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
    RentCarBranchComponent,
    MyRcServisComponent,
    MyCarListComponent,
    MyAirlineServisComponent,
    MyFlightListComponent,
    ListOfAirlinesComponent,
    ListOfCarCompaniesComponent,
    AdminAddCarComponent,
    AdminAddFlightComponent,
    ChangeFlightComponent,
    ReservationCarDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
   

  ],
  entryComponents:[
    ReservedSeatDialogComponent
  ],
  providers: [
    UserService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
