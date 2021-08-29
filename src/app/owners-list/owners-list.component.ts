import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';

const data = [{ "id_inmueble": 1.0, "inmueble_tipo_id": 2, "destino": "oficina", "domicilio": "Apdo.:645-9657 Egestas ", "ciudad": 2, "cod_postal": 97711, "alias": "viverra.", "ref_catastral": "408849-4986", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 2.0, "inmueble_tipo_id": 7, "destino": "oficina", "domicilio": "7959 Eu, Avda.", "ciudad": 2, "cod_postal": 75213, "alias": "vestibulum", "ref_catastral": "808108-0593", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 3.0, "inmueble_tipo_id": 1, "destino": "oficina", "domicilio": "521 Elit. Carretera", "ciudad": 2, "cod_postal": 74981, "alias": "egestas.", "ref_catastral": "403921-0366", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 4.0, "inmueble_tipo_id": 4, "destino": "residencial", "domicilio": "Apdo.:861-214 Sed C/", "ciudad": 1, "cod_postal": 96044, "alias": "felis", "ref_catastral": "058965-6982", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null },]

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent {
  title: string
  @Output() emitTitle: EventEmitter<string>
  columns: any[];
  data: any[];
  displayedColumns: any[];

  constructor() {
    this.title = 'Propietarios'
    this.emitTitle = new EventEmitter()
    this.data = data;
    this.columns = [
      {
        columnDef: 'alias',
        header: 'Alias',
        cell: (property: any) => `${property.alias}`
      },
      {
        columnDef: 'direction',
        header: 'Tipo',
        cell: (property: any) => `${property.direction}`
      },
      {
        columnDef: 'useCase',
        header: 'Tipo de uso',
        cell: (property: any) => `${property.destino}`
      },
      {
        columnDef: 'actions',
        header: 'Alias',
      }

    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
}
