import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.backendAppUrl}users`
  }

  logIn(email: string, password: string): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).toPromise()
  }

  register(user: User): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user).toPromise()
  }
}
