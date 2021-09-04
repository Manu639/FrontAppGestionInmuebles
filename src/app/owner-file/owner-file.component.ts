import { OwnersService } from './../owners.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from '../dashboard/interfaces/owner.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-file',
  templateUrl: './owner-file.component.html',
  styleUrls: ['./owner-file.component.scss']
})

export class OwnerFileComponent implements OnInit {

  owner: Owner
  ownerForm: FormGroup
  isReadonly: boolean

  constructor(
    private ownersService: OwnersService,
    private activatedRoute: ActivatedRoute
  ) {

    this.isReadonly = true
    this.owner = {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      identificationNumber: '',
      personalAddress: '',
      invoiceAddress: '',
      iban: '',
      birthDate: new Date()
    }

    this.ownerForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      identificationNumber: new FormControl(''),
      personalAddress: new FormControl(''),
      invoiceAddress: new FormControl(''),
      iban: new FormControl(''),
      birthDate: new FormControl(''),
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.owner = await this.ownersService.getById(params.id)

      this.ownerForm.get('name')?.setValue(this.owner.name);
      this.ownerForm.get('lastName')?.setValue(this.owner.lastName);
      this.ownerForm.get('phone')?.setValue(this.owner.phone);
      this.ownerForm.get('email')?.setValue(this.owner.email);
      this.ownerForm.get('identificationNumber')?.setValue(this.owner.identificationNumber);
      this.ownerForm.get('personalAddress')?.setValue(this.owner.personalAddress);
      this.ownerForm.get('invoiceAddress')?.setValue(this.owner.invoiceAddress);
      this.ownerForm.get('iban')?.setValue(this.owner.iban);
      this.ownerForm.get('birthDate')?.setValue(this.owner.birthDate);
    })
  }


  onSubmit() {
    console.log(this.ownerForm.value)
    let ownerId = this.activatedRoute.snapshot.params.id
    this.ownersService.update(this.ownerForm.value, ownerId)
    this.isReadonly = true
  }

  initEditMode() {

    this.isReadonly = this.isReadonly ? false : true

  }
}
