import { PropertiesService } from '../../../services/properties.service';
import { Component } from '@angular/core';
import { Property } from '../../../interfaces/property.interface';


@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent {
  columns: any[];
  properties: Property[];
  displayedColumns: any[];

  constructor(
    private propertyService: PropertiesService
  ) {
    this.properties = [];
    this.columns = [
      {
        columnDef: 'alias',
        header: 'Alias',
        cell: (property: any) => `${property.alias}`
      },
      {
        columnDef: 'address',
        header: 'Dirección',
        cell: (property: any) => `${property.address}`
      },
      {
        columnDef: 'actions',
        header: 'Opciones',
      }

    ];

    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  async ngOnInit() {
    this.properties = await this.propertyService.getAll()
  }
}
