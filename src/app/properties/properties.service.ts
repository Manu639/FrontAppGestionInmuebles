import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.backendAppUrl}properties`
  };

  getAll(): Promise<Property[]> {
    return this.http.get<Property[]>(this.baseUrl).toPromise()
  }

  getById(id: string): Promise<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`).toPromise()
  }

  update(property: Property, propertyId: string): Promise<any> {
    property.id = propertyId
    return this.http.post<any>(`${this.baseUrl}/update`, property).toPromise()
  }
}
