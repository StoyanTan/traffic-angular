import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './shared/restservice';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';
import { D3PackedBubbleChartService } from './shared/d3-packed-bubble-chart';
import { DetailsComponent } from './details/details.component';
import { NgxTweetModule } from "ngx-tweet";
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HomeComponent,
    DetailsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTweetModule,
    NgxPaginationModule
  ],
  providers: [RestService, D3PackedBubbleChartService, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
