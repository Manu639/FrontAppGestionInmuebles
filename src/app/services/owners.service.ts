import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Owner } from '../interfaces/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.backendAppUrl}owners`
  }

  getAll(): Promise<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl).toPromise()
  }

  getById(id: string): Promise<Owner> {
    return this.http.get<Owner>(`${this.baseUrl}/${id}`).toPromise()
  }

  update(owner: Owner, ownerId: string): Promise<any> {
    console.log(owner)
    owner.id = ownerId
    return this.http.post<any>(`${this.baseUrl}/update`, owner).toPromise()
  }
}

