import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { _myReducer } from './store/counterReducer';
import { ParentComponent } from './parent/parent.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({counter:_myReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
