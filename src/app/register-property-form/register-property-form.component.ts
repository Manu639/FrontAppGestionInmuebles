import { MatDialogRef } from '@angular/material/dialog';
import { PropertiesService } from './../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from '../interfaces/owner.interface';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'app-register-property-form',
  templateUrl: './register-property-form.component.html',
  styleUrls: ['./register-property-form.component.scss']
})
export class RegisterPropertyFormComponent implements OnInit {

  newPropertyForm: FormGroup;
  owners: Owner[];
  types: { id: number, name: string }[];

  constructor(
    private propertiesService: PropertiesService,
    private ownersService: OwnersService,
    public dialogRef: MatDialogRef<RegisterPropertyFormComponent>
  ) {
    this.types = [];
    this.owners = [];
    this.newPropertyForm = new FormGroup({
      alias: new FormControl(''),
      address: new FormControl(''),
      type: new FormControl(''),
      owner_id: new FormControl(''),
    })
  }

  async ngOnInit() {
    let response: any;

    response = await this.propertiesService.getTypes();
    this.types = response.data;

    response = await this.ownersService.getByUser();
    this.owners = response.data;
  }

  onSubmit(): void {
    this.propertiesService.create(this.newPropertyForm.value)
    this.dialogRef.close()
  }

}
