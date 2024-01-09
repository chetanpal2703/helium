import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string;

  constructor(private http: HttpClient) {}

  // Method to perform login
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    // Use a separate HttpClient instance without the interceptor
    return this.http.post<any>('https://campmanagementapidev.tsoft.co.in/v1/web_urls/web_login/', loginData).pipe(
      tap((response) => {
        debugger
        // Assuming response contains a token
        const token = response.data.access_token;

        // Set the obtained token in the authentication service
        this.setAuthToken(token);
      }),
      catchError(this.handleError<any>('Login'))
    );
  }

  // Method to set the token after a successful login
  setAuthToken(token: string) {
    this.authToken = token;
  }

  // Method to get the token
  getAuthToken() {
    return this.authToken;
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.authToken;
  }

  // Method to perform logout
  logout(): void {
    // Clear the stored token upon logout
    this.setAuthToken(null);
  }

  // Generic error handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
