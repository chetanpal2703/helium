import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'https://campmanagementapidev.tsoft.co.in';
  private apiUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_urls/web_login/';
  // https://campmanagementapidev.tsoft.co.in
  //  apiUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_urls/';
  constructor(private http: HttpClient) {}
  postData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

   


  
}
