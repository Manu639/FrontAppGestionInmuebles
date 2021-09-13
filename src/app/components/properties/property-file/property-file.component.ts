import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Property } from '../../../interfaces/property.interface';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../../services/properties.service';

@Component({
  selector: 'app-property-file',
  templateUrl: './property-file.component.html',
  styleUrls: ['./property-file.component.scss']
})

export class propertyFileComponent implements OnInit {

  property: Property
  propertyForm: FormGroup
  isReadonly: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertiesService: PropertiesService
  ) {
    this.isReadonly = true
    this.property = {
      id: '',
      alias: '',
      address: '',
      lat: undefined,
      lng: undefined,
      type: 0
    }
    this.propertyForm = new FormGroup({
      alias: new FormControl(''),
      address: new FormControl(''),
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.property = await this.propertiesService.getById(params.id)

      this.propertyForm.get('alias')?.setValue(this.property.alias);
      this.propertyForm.get('address')?.setValue(this.property.address);
    })
  }


  async onSubmit() {
    let propertyId = this.activatedRoute.snapshot.params.id
    this.propertiesService.update(this.propertyForm.value, propertyId)
    this.property = await this.propertiesService.getById(propertyId)
    this.isReadonly = true
  }

  initEditMode() {
    this.isReadonly = this.isReadonly ? false : true

  }
}


