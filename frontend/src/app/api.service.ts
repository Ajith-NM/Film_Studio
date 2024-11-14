import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  base_url = 'http://localhost:4000/';

  postLogin(data: { email: string; password: string }) {
    return this.http.post(`${this.base_url}user/postLogin`, data);
  }
  postSignup(data: { email: string; password: string; username:string }) {
    return this.http.post(`${this.base_url}user/postSignup`, data);
  }
}
