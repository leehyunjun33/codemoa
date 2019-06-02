import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
