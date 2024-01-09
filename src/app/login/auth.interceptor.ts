import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    // Check if the request URL contains '/login'
    if (!request.url.includes('/login')) {
      // Check if the user is authenticated (token available)
      if (this.authService.isAuthenticated()) {
        const authToken = this.authService.getAuthToken();

        // If a token exists, add it to the Authorization header
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
