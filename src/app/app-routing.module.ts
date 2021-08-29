import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'owners', component: OwnersListComponent },
  { path: 'properties', component: PropertiesListComponent },
  { path: '**', redirectTo: 'error 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
