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

@Injectable({
    providedIn: "root"
})

export class UsersService {
    constructor(private httpclient: HttpClient) {
        console.log('constructor de loginService');
        
    }

    // public post(url: string, body){
    //     return this.httpclient.post(url, body);
    // }
}