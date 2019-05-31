import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      //useClass: PathLocationStrategy
      useClass: HashLocationStrategy
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
