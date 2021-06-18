import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BarSideWaiterComponentComponent } from './bar-side-waiter-component/bar-side-waiter-component.component';


const routes: Routes = [
  {path: '', component: LoginComponent}, //por default
  {path: '**', component: LoginComponent} //mientras login hasta tener un componente de error

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
