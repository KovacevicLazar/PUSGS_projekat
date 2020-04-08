import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './componente/nav-menu/nav-menu/nav-menu.component';
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';

import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component';
import { FriendsComponent } from './componente/friends/friends.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SignInComponent,
    StartingPageComponent,
    FriendsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
