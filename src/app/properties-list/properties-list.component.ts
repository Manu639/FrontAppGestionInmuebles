import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';

const data = [{ "id_inmueble": 1.0, "inmueble_tipo_id": 2, "destino": "oficina", "domicilio": "Apdo.:645-9657 Egestas ", "ciudad": 2, "cod_postal": 97711, "alias": "viverra.", "ref_catastral": "408849-4986", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 2.0, "inmueble_tipo_id": 7, "destino": "oficina", "domicilio": "7959 Eu, Avda.", "ciudad": 2, "cod_postal": 75213, "alias": "vestibulum", "ref_catastral": "808108-0593", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 3.0, "inmueble_tipo_id": 1, "destino": "oficina", "domicilio": "521 Elit. Carretera", "ciudad": 2, "cod_postal": 74981, "alias": "egestas.", "ref_catastral": "403921-0366", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 4.0, "inmueble_tipo_id": 4, "destino": "residencial", "domicilio": "Apdo.:861-214 Sed C/", "ciudad": 1, "cod_postal": 96044, "alias": "felis", "ref_catastral": "058965-6982", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 5.0, "inmueble_tipo_id": 5, "destino": "residencial", "domicilio": "Apdo.:229-2694 Eget Av.", "ciudad": 1, "cod_postal": 50615, "alias": "Integer", "ref_catastral": "874842-8342", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 6.0, "inmueble_tipo_id": 2, "destino": "oficina", "domicilio": "8566 Eu ", "ciudad": 2, "cod_postal": 82519, "alias": "imperdiet", "ref_catastral": "194492-8207", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 7.0, "inmueble_tipo_id": 3, "destino": "residencial", "domicilio": "Apartado núm.: 607, 7797 Dui Calle", "ciudad": 3, "cod_postal": 5550, "alias": "ultricies", "ref_catastral": "087445-6536", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 8.0, "inmueble_tipo_id": 4, "destino": "residencial", "domicilio": "9833 Ut ", "ciudad": 3, "cod_postal": 26667, "alias": "eu,", "ref_catastral": "895199-0244", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 9.0, "inmueble_tipo_id": 6, "destino": "residencial", "domicilio": "Apartado núm.: 491, 8678 Curabitur C/", "ciudad": 2, "cod_postal": 22727, "alias": "ut,", "ref_catastral": "584952-6883", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }, { "id_inmueble": 10.0, "inmueble_tipo_id": 4, "destino": "residencial", "domicilio": "Apdo.:169-6031 Enim, C.", "ciudad": 1, "cod_postal": 28481, "alias": "eu", "ref_catastral": "377836-4327", "reg_propiedad": null, "tomo": null, "libro": null, "folio": null, "finca": null, "inspeccion": null }]

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent {
  title: string
  @Output() emitTitle: EventEmitter<string>
  columns: any[];
  data: any[];
  displayedColumns: any[];

  constructor() {
    this.title = 'Inmuebles'
    this.emitTitle = new EventEmitter()
    this.data = data;
    this.columns = [
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
        columnDef: 'alias',
        header: 'Alias',
        cell: (property: any) => `${property.alias}`
      },
      {
        columnDef: 'actions',
        header: 'Alias',
      }

    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
}
