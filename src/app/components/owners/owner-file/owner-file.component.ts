import { OwnersService } from '../../../services/owners.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from '../../../interfaces/owner.interface';
import { ActivatedRoute } from '@angular/router';

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
      this.owner = await this.ownersService.getById(params.id)

      this.ownerForm.get('name')?.setValue(this.owner.name);
      this.ownerForm.get('last_name')?.setValue(this.owner.last_name);
      this.ownerForm.get('phone')?.setValue(this.owner.phone);
      this.ownerForm.get('email')?.setValue(this.owner.email);
      this.ownerForm.get('identification_number')?.setValue(this.owner.identification_number);
      this.ownerForm.get('personal_address')?.setValue(this.owner.personal_address);
      this.ownerForm.get('invoice_address')?.setValue(this.owner.tax_address);
      this.ownerForm.get('iban')?.setValue(this.owner.iban);
      this.ownerForm.get('birth_date')?.setValue(this.owner.birth_date);
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