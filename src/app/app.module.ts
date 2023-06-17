import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerSideComponent } from './server-side/server-side.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './server-side/material-module';

@NgModule({
  declarations: [
    AppComponent,
    ServerSideComponent,
   // ModelPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
