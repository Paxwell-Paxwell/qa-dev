import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import { HomeComponent } from './home/home.component';
import { CardVoteComponent } from './home/card-vote/card-vote.component';
import { ModalComponent } from './home/card-vote/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateVoteComponent,
    HomeComponent,
    CardVoteComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
