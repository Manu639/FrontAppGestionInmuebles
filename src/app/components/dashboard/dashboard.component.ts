import { Owner } from '../../interfaces/owner.interface';
import { Component, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import { OwnersService } from '../../services/owners.service';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  owners: Owner[]
  properties: Property[]

  constructor(
    private ownerService: OwnersService,
    private propertiesService: PropertiesService
  ) {
    this.owners = []
    this.properties = []
  }

  async ngOnInit() {
    this.owners = await this.ownerService.getAll()
    this.properties = await this.propertiesService.getAll()
  }

}
