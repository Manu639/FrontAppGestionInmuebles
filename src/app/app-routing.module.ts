import { OwnerFileComponent } from './owners/owner-file/owner-file.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { propertyFileComponent } from './properties/property-file/property-file.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'owners', component: OwnersListComponent },
  { path: 'owners/:id', component: OwnerFileComponent },
  { path: 'properties', component: PropertiesListComponent },
  { path: 'properties/:id', component: propertyFileComponent },
  { path: '**', redirectTo: '/owners/5' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
