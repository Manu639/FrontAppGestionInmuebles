import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Owner } from '../interfaces/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.ApiUrl}owners`
  }

  getByUser(): Promise<any> {
    return this.http.get<any>(this.baseUrl).toPromise()
  }

  getById(id: string): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).toPromise()
  }

  create(owner: Owner): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, owner).toPromise()
  }

  update(owner: Owner, ownerId: string): Promise<any> {
    owner.id = ownerId
    return this.http.put<any>(`${this.baseUrl}/update`, owner).toPromise()
  }
}

