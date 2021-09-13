import { NgRedux } from '@angular-redux/store';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('authorization');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: token
        }
      });
    }

    return next.handle(request);
  }

}
