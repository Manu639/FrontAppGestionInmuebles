import { OwnerFileComponent } from './owner-file/owner-file.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/owners/5' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'owners', component: OwnersListComponent },
  { path: 'owners/:id', component: OwnerFileComponent },
  { path: 'properties', component: PropertiesListComponent },
  { path: '**', redirectTo: '/owners/5' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
