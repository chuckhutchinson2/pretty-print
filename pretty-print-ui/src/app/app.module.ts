import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JsonFormComponent } from './jsonform.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    JsonFormComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
