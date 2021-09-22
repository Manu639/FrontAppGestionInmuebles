import { OwnersService } from '../../../services/owners.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from '../../../interfaces/owner.interface';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from 'src/app/interfaces/property.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-owner-file',
  templateUrl: './owner-file.component.html',
  styleUrls: ['./owner-file.component.scss']
})

export class OwnerFileComponent implements OnInit {

  owner: Owner;
  properties: Property[];
  ownerForm: FormGroup;
  isReadonly: boolean;

  constructor(
    private ownersService: OwnersService,
    private propertiesService: PropertiesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.properties = [];

    this.isReadonly = true;

    this.owner = {
      name: '',
      last_name: '',
      phone: '',
      email: '',
      identification_number: '',
      personal_address: '',
      tax_address: '',
      iban: '',
      birth_date: new Date()
    }

    this.ownerForm = new FormGroup({
      name: new FormControl(''),
      last_name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      identification_number: new FormControl(''),
      personal_address: new FormControl(''),
      tax_address: new FormControl(''),
      iban: new FormControl(''),
      birth_date: new FormControl(''),
    })

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      let response = await this.ownersService.getById(params.id)
      this.owner = response.data;

      this.ownerForm.get('name')?.setValue(this.owner.name);
      this.ownerForm.get('last_name')?.setValue(this.owner.last_name);
      this.ownerForm.get('phone')?.setValue(this.owner.phone);
      this.ownerForm.get('email')?.setValue(this.owner.email);
      this.ownerForm.get('identification_number')?.setValue(this.owner.identification_number);
      this.ownerForm.get('personal_address')?.setValue(this.owner.personal_address);
      this.ownerForm.get('invoice_address')?.setValue(this.owner.tax_address);
      this.ownerForm.get('iban')?.setValue(this.owner.iban);
      this.ownerForm.get('birth_date')?.setValue(this.owner.birth_date);

      response = await this.propertiesService.getByOwner(params.id);
      this.properties = response.data
    })

  }

  onSubmit() {
    let ownerId = this.activatedRoute.snapshot.params.id

    let formDate = moment(this.ownerForm.get('birth_date').value);

    const { years, months, date: day } = formDate.toObject();
    this.ownerForm.value.birth_date = `${years}-${months + 1}-${day}`;
    console.log(this.ownerForm.get('birth_date'))
    this.ownersService.update(this.ownerForm.value, ownerId);
    this.isReadonly = true;
  }

  initEditMode() {
    this.isReadonly = this.isReadonly ? false : true
  }
}
