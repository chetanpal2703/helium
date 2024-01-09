import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubadminService {

  private apiUrl = 'https://campmanagementapidev.tsoft.co.in/v1/web_user_management/get_user_list';

  constructor(private http: HttpClient) {}

  // Function to make a GET request with query parameters
  getUserList(page: number, rolesId: number, createdBy: string): Observable<any> {
    // Set up the query parameters
    const params = new HttpParams()
      .set('page', page.toString())
      .set('roles_id', rolesId.toString())
      .set('created_by', createdBy);

    // Make the GET request with the specified URL and query parameters
    return this.http.get(this.apiUrl, { params });
  }
}
