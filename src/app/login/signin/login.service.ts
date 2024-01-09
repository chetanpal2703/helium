import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'https://campmanagementapidev.tsoft.co.in';
  private apiUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_urls/web_login/';
  private userUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_user_management/get_user_list';
  constructor(private http: HttpClient) {}


  // postData(formData: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, formData);
  // }

  getUserList(page: number, rolesId: number, createdBy: string): Observable<any> {
    debugger
    // Set up the query parameters
    const params = new HttpParams()
      .set('page', page.toString())
      .set('roles_id', rolesId.toString())
      .set('created_by', createdBy);

    // Make the GET request with the specified URL and query parameters
    return this.http.get(this.userUrl, { params });
  }


  
}
