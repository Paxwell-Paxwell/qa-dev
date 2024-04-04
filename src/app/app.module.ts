import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import { HomeComponent } from './home/home.component';
import { CardVoteComponent } from './home/card-vote/card-vote.component';
import { ModalComponent } from './home/card-vote/modal/modal.component';
import { ModalReportComponent } from './home/card-vote/modal-report/modal-report.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TextareaAutoresizeDirective } from './shared/core/textarea-autoresize.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardVoteComponent,
    ModalComponent,
    ModalReportComponent,
    CreateVoteComponent,
    TextareaAutoresizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
