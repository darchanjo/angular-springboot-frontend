import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn()) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': `Basic ${sessionStorage.getItem(this.authenticationService.AUTH_TOKEN_SESSION_ATTRIBUTE_NAME)}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}