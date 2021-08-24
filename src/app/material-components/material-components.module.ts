import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'

const material = [MatSidenavModule, MatListModule, MatIconModule]

@NgModule({
  imports: [
    CommonModule,
    ...material],

  exports: [
    ...material
  ]
})

export class MaterialModule { }