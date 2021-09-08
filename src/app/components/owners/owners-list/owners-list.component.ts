import { Component } from '@angular/core';
import { OwnersService } from 'src/app/services/owners.service';
import { Owner } from '../../../interfaces/owner.interface'

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent {

  owners: Owner[];
  columns: any[];
  displayedColumns: any[];

  constructor(
    private ownersService: OwnersService
  ) {
    this.owners = [];
    this.columns = [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (property: any) => `${property.name}`
      },
      {
        columnDef: 'last_name',
        header: 'Apellidos',
        cell: (property: any) => `${property.last_name}`
      },
      {
        columnDef: 'phone',
        header: 'Teléfono',
        cell: (property: any) => `${property.phone}`
      },
      {
        columnDef: 'email',
        header: 'Email',
        cell: (property: any) => `${property.email}`
      },
      {
        columnDef: 'actions',
        header: 'Alias',
      }

    ];

    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  async ngOnInit() {
    this.owners = await this.ownersService.getAll()
  }
}
