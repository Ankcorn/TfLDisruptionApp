import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisruptionListComponent } from './disruption-list/disruption-list.component';
import { DisruptionComponent } from './disruption/disruption.component';
import { UpdateComponent } from './update/update.component';

import { TflService } from './tfl.service'

@NgModule({
  declarations: [
    AppComponent,
    DisruptionListComponent,
    DisruptionComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TflService],
  bootstrap: [AppComponent]
})
export class AppModule { }
