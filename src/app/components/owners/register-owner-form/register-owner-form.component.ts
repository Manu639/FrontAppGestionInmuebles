import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-register-owner-form',
  templateUrl: './register-owner-form.component.html',
  styleUrls: ['./register-owner-form.component.scss']
})

export class RegisterOwnerFormComponent implements OnInit {

  newOwnerForm: FormGroup


  constructor(
    private ownersService: OwnersService,
    public dialogRef: MatDialogRef<RegisterOwnerFormComponent>
  ) {
    this.newOwnerForm = new FormGroup({
      name: new FormControl(''),
      last_name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      identification_number: new FormControl(''),
      personal_address: new FormControl(''),
      tax_address: new FormControl(''),
      birth_date: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    let date = this.newOwnerForm.get('birth_date').value;
    date = date.toObject();
    this.newOwnerForm.value.birth_date = `${date.years}-${date.months + 1}-${date.date}`

    this.ownersService.create(this.newOwnerForm.value);
    this.dialogRef.close();
  }

}
