import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonFormComponent } from './jsonform.component';
import { CopyComponent } from './copy.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    JsonFormComponent,
    CopyComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
