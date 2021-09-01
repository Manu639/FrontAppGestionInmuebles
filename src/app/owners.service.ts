import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Owner } from './dashboard/interfaces/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.backendAppUrl}owners`
  }

  getAll(): Promise<Owner[]> {
    console.log(this.baseUrl)
    return this.http.get<Owner[]>(this.baseUrl).toPromise()
  }
}
