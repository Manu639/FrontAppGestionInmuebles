import { OwnerFileComponent } from './components/owners/owner-file/owner-file.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';
import { PropertiesListComponent } from './components/properties/properties-list/properties-list.component';
import { propertyFileComponent } from './components/properties/property-file/property-file.component';
import { LoginComponent } from './components/login/login.component';
import { AppContentComponent } from './components/app-content/app-content.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'login/:token', component: LoginComponent },
  {
    path: 'app', component: AppContentComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'owners', component: OwnersListComponent },
      { path: 'owners/:id', component: OwnerFileComponent },
      { path: 'properties', component: PropertiesListComponent },
      { path: 'properties/:id', component: propertyFileComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
