import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { PropertiesService } from './../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from '../interfaces/owner.interface';
import { OwnersService } from '../services/owners.service';
import { environment } from 'src/environments/environment';

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
      owner_id: new FormControl(''),
      alias: new FormControl(''),
      address: new FormControl(''),
      type: new FormControl(''),
      ownership: new FormControl(''),
      purchase_date: new FormControl(''),
    })
  }

  async ngOnInit() {
    let response: any;

    response = await this.propertiesService.getTypes();
    this.types = response.data;

    response = await this.ownersService.getByUser();
    this.owners = response.data;
  }

  async onSubmit() {

    //Parsing date
    let formDate = this.newPropertyForm.get('purchase_date').value;
    const { years, months, date: day } = formDate.toObject();
    this.newPropertyForm.value.purchase_date = `${years}-${months + 1}-${day}`;

    //Parsing ownetship
    this.newPropertyForm.value.ownership = this.newPropertyForm.get('ownership').value / 100;

    //Getting accurate coords from google

    let response = await this.propertiesService.getGoogleAddressInfo(this.newPropertyForm.get('address').value)
    console.log(response)

    this.newPropertyForm.value.address = response.results[0].formated_address

    this.newPropertyForm.value.lat = response.results[0].geometry.lat
    this.newPropertyForm.value.lng = response.results[0].geometry.lng

    console.log(this.newPropertyForm.value)

    this.propertiesService.create(this.newPropertyForm.value)
    this.dialogRef.close()
  }

}
