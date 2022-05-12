import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { ScientificCommunicationComponent } from './scientific-communication/scientific-communication.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import { GetPubsService } from './get-pubs.service';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    ScientificCommunicationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [GetPubsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
