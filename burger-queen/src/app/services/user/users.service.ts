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
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { LoginComponent } from "../../login/login.component";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class UsersService {
    private domain: string;
    private endpoint: string;
    constructor(private httpclient: HttpClient) {
        console.log('constructor AQUÍ!!!');
        this.domain = environment.domain;
        this.endpoint = '/user';
    }
}