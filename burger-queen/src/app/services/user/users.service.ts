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
import { UserModel } from 'src/app/models/user.model';
import { Token } from 'src/app/models/auth';

@Injectable({
    providedIn: "root"
})

export class UsersService {
    private endpoint: string;
    url = "http://localhost:4201";

    constructor(private http: HttpClient) {
        this.endpoint = '/users';
    }

    getUserId(uid: string, token: Token){
        return this.http.post<UserModel>(`${this.url}${this.endpoint}/${uid}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: `Bearer ${token}`
            })}
      );
    }

    // public post(url: string, body){
    //     return this.httpclient.post(url, body);
    // }
}