import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { LoginComponent } from './login/login.component';
import { BarSideComponent } from './bar-side/bar-side.component';

// Array de rutas
const routes: Routes = [
  {path: '', component: LoginComponent}, //por default
  {path: '**', component: LoginComponent} //mientras login hasta tener un componente de error

];

@NgModule({
  // cargamos todas las configuraciones de la ruta
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
