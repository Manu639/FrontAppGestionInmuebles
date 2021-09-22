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

    const isGoogle = (req.url.includes('google'))

    if (isGoogle) {
      return next.handle(req)
    }

    let request = req;

    const token: string = localStorage.getItem('authorization');
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
