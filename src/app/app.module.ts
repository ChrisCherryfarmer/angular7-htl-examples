import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { TypescriptComponent } from './+typescript/typescript.component';
import { HomeComponent } from './+home/home.component';
import { CalculatorComponent } from './+calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestListComponent } from './+guest-list/guest-list.component';
import { GuestAttendingFilterPipe } from './+guest-list/guest-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GuestListService } from './+guest-list/guest-list.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    TypescriptComponent,
    GuestListComponent,
    GuestAttendingFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [GuestListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
