import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, Token } from '../../models/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = "http://localhost:4201/auth"
  constructor(private http: HttpClient) {
   }
  
  postCredential(data: Auth): Observable<Token> {
    return this.http.post<Token>(this.url, data);
  }
}
