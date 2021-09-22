import { PropertiesService } from '../../../services/properties.service';
import { Component } from '@angular/core';
import { Property } from '../../../interfaces/property.interface';
import { RegisterPropertyFormComponent } from 'src/app/register-property-form/register-property-form.component';
import { MatDialog } from '@angular/material/dialog';


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
    public dialog: MatDialog,
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
        columnDef: 'type',
        header: 'Tipo',
        cell: (property: any) => `${property.type}`
      },
      {
        columnDef: 'address',
        header: 'Dirección',
        cell: (property: any) => `${property.address}`
      },
      {
        columnDef: 'reference',
        header: 'Ref. Catastral',
      },
      {
        columnDef: 'actions',
        header: 'Opciones',
      },

    ];

    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  async ngOnInit() {
    let response = await this.propertyService.getByUser()
    this.properties = response.data
  }

  openDialog(): void {
    this.dialog.open(RegisterPropertyFormComponent, { width: '600px' });
  }
}
