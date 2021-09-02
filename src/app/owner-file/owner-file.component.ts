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

  ownerForm = new FormGroup({
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

  constructor(
    private ownersService: OwnersService,
    private activatedRoute: ActivatedRoute
  ) {

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
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async params => {
      console.log(params)
      let owner = await this.ownersService.getById(params.id)
      console.log(owner)
    })

    console.log(this.owner)
  }


  ngSubmit() {

  }
}
