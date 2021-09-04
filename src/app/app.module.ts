import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { MaterialModule } from './material-components/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnerFileComponent } from './owners/owner-file/owner-file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { propertyFileComponent } from './properties/property-file/property-file.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OwnersListComponent,
    PropertiesListComponent,
    OwnerFileComponent,
    propertyFileComponent
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
