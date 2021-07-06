// NOTAS:
// un servicio es una clase
// su objetivo es separar la lógica principal de la app
// tienen métodos que harán funciones y peticiones ayax al backend
// será modelo de consulta
// tiene un objeto inyectable
import { Injectable } from '@angular/core';
// es un decorador que sirve para inyectar nuestro objeto en otra clase
// y no estarlo creando siempre
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { LoginComponent } from "../../login/login.component";
import { UserDetailModel, IUserModel, RolModel } from 'src/app/models/user.model';
import { Token } from 'src/app/models/auth';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class UsersService {
    private endpoint: string;
    url = "http://localhost:4201";

    constructor(private http: HttpClient) {
        this.endpoint = '/users';

    }

    getAllUsers(): Observable<UserDetailModel[]>{
      return this.http.get<Array<UserDetailModel>>(`${this.url}${this.endpoint}`);
    }

    getUserId(uid: string, token: Token){
        return this.http.post<IUserModel>(`${this.url}${this.endpoint}/${uid}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: `Bearer ${token}`
            })
        }
      );
    }

    getCurrentUser(uid: string){
      return this.http.get<UserDetailModel>(`${this.url}${this.endpoint}/:${uid}`)
    }

    addUser(newUser: UserDetailModel): Observable<UserDetailModel>{
      return this.http.post<UserDetailModel>(`${this.url}${this.endpoint}`, newUser);
    }

    /** POST: add a new hero to the database */
// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }

    
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
  //   let token = localStorage.getItem('accessToken');
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
