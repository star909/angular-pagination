import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentDataComponent } from './modules/parent-data/parent-data.component';
import { PaginationComponent } from './modules/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDataComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
