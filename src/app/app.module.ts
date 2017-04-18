import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisruptionListComponent } from './disruption-list/disruption-list.component';
import { DisruptionComponent } from './disruption/disruption.component';

import { TflService } from './tfl.service'
import { GoogleService } from './google.service';
import { LocationComponent } from './location/location.component'

@NgModule({
  declarations: [
    AppComponent,
    DisruptionListComponent,
    DisruptionComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TflService,GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
