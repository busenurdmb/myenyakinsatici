import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token) {
        const clonedReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }, // Updated
        });

        return next.handle(clonedReq);
      }
    }

    // Ekstra bir else durumuna gerek yok, token yoksa orijinal request'i gönder
    return next.handle(req);
  }
}
