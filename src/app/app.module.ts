import { IAppState, INITIAL_STATE, rootReducer } from './redux/store';
import { isDevMode, NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesListComponent } from './components/properties/properties-list/properties-list.component';
import { MaterialModule } from './components/material-components/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnerFileComponent } from './components/owners/owner-file/owner-file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { propertyFileComponent } from './components/properties/property-file/property-file.component';
import { LoginComponent } from './components/login/login.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OwnersListComponent,
    PropertiesListComponent,
    OwnerFileComponent,
    propertyFileComponent,
    LoginComponent,
    SideMenuComponent,
    AppContentComponent,
    ToolBarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgReduxModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    devTools: DevToolsExtension,
    ngRedux: NgRedux<IAppState>) {

    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }
}
