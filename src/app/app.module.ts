import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { MaterialModule } from './material-components/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnerFileComponent } from './owner-file/owner-file.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OwnersListComponent,
    PropertiesListComponent,
    OwnerFileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
