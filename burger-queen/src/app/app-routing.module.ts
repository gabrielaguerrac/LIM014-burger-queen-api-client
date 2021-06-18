import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
/* import {  } */

// Array de rutas
const routes: Routes = [];

@NgModule({
  // cargamos todas las configuraciones de la ruta
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
