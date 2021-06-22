import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Auth, Token } from '../../models/auth';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = "http://localhost:4201/auth"
  
  constructor(private http: HttpClient) {
   }
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server error");
  }
  
  loginUser(data: Auth): Observable<Token> {
    return this.http.post<Token>(this.url, data);
                   // .catch(this.errorHandler);
  }
}
