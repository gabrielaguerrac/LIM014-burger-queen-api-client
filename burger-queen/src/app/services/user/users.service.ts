// NOTAS:
// un servicio es una clase
// un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos 
// y operativa relacionada con el negocio y las cosas que se hacen con 
// los datos dentro de una aplicación. Los servicios serán consumidos por 
// los componentes, que delegarán en ellos la responsabilidad de acceder a la 
// información y la realización de operaciones con los datos.
import { Injectable } from '@angular/core';
// es un decorador que sirve para inyectar nuestro objeto en otra clase
// y no estarlo creando siempre
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { LoginComponent } from "../../login/login.component";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { Token } from '../../models/auth';

//import { UserModel } from 'src/app/models/user.model';
//import { Token } from 'src/app/models/auth';


@Injectable({
    providedIn: "root"
})

export class UsersService {

    // private domain: string;
    private endpoint: string;
    url = "http://localhost:4201"

     constructor(private http: HttpClient) {
        // this.domain = environment.domain;
        this.endpoint = '/users';
      }
     getUserId(uid: string, token: Token){
        return this.http.post<UserModel>(`${this.url}${this.endpoint}/${uid}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: `Bearer ${token}`
            })
        }
      );
    }
    // setUser (user: UserModel): void{ // xq no devuelve algo se escribe VOID
  //   let user_string = JSON.stringify(user);
  //   localStorage.setItem('currentUser', user_string);
  // }
  // setToken (token: any): void {
  //   localStorage.setItem('accessToken', token);
  // }
  // getToken (){
  //   return localStorage.getItem('accessToken');
  // }
  // getCurrentUser (){
  //   let user_string = localStorage.getItem('currentUser');
  //   if (!isNullOrUndefined(user_string)){
  //     let user = JSON.parse(user_string);
  //     return user;
  //   } else {
  //     return null;
  //   }
  // }
  // logoutUser(){
  //   let accessToken = localStorage.getItem('accessToken');
  //   const url_api = `${this.url}${this.endpoint}+/logoutUser?accessToken=${accessToken}`;
  //   localStorage.removeItem('accessToken')
  //   localStorage.removeItem('currentUser')
  //   return this.http.post
  // }
  }