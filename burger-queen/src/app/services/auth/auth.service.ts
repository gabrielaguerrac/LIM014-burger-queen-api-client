import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Auth, Token } from '../../models/auth';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
/* import { isNullOrUndefined } from 'util'; */
/* import { isNull } from '@angular/compiler/src/output/output_ast'; */
// import 'rxjs/operator/catch';
// import 'rxjs/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* private domain: string; */
  private endpoint: string;
  url = "http://localhost:4201"
  constructor(private http: HttpClient) {
    /* this.domain = environment.domain; */
    this.endpoint = '/auth';
   }

  loginUser (data: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.url}${this.endpoint}`, data)
                    
    } 

}
  // loginUser(data: Auth): Observable<Token> {
  //   return this.http.post<Token>(`${this.url}${this.endpoint}`, data);
  //   // return this.http.post<Token>(`${this.domain}${this.endpoint}`, data);
  // }

