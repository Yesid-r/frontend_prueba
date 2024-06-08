import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/api/v1/auth';


  constructor(private http: HttpClient) { }

  registerUser(userDetails: any) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }
  authenticate(userDetails: any) {
    return this.http.post(`${this.baseUrl}/authenticate`, userDetails);
  }




}