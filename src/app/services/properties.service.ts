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
    this.baseUrl = `${environment.ApiUrl}properties`
  };

  getByUser(): Promise<any> {
    return this.http.get<any>(this.baseUrl).toPromise()
  }

  getById(id: string): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).toPromise()
  }

  update(property: Property, propertyId: string): Promise<any> {
    property.id = propertyId
    return this.http.put<any>(`${this.baseUrl}/update`, property).toPromise()
  }

  getTypes(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/types`).toPromise()
  }

  create(property: Property): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, property).toPromise()
  }
}
