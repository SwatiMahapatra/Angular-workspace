import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormData
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
