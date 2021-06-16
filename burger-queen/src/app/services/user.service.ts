// un servicio es un objeto inyectable
import { Injectable } from '@angular/core';
import { UserModel } from "../models/user.model";

@Injectable()
export class UserServiceApi {
    users: UserModel[] = [];
    constructor() { }

  anadirCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  clienteNuevo(): Cliente {
    return {
      nombre: 'DesarrolloWeb.com',
      cif: 'B123',
      direccion: 'Oficinas de EscuelaIT, C/ Formación online nº 1',
      creado: new Date(Date.now())
    };
  }
}