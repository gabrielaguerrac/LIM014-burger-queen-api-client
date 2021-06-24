import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
// import { BarSideComponent } from './bar-side/bar-side.component';
import { UserComponent } from './user/user.component';
import { RoleSelectorComponent } from './role-selector/role-selector.component';
import { ProductsComponent } from './products/products.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
//import { OrdersComponent } from './orders/orders.component';
import { OrdersKitchenComponent } from './orders-kitchen/orders-kitchen.component';

// Array de rutas
const routes: Routes = [
  {path: '', component: LoginComponent}, //por default
  // { path: '/offers', component: OffersComponent } // TO DO: only users auth
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'roleselector', component: RoleSelectorComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'waitertables', component: WaiterTablesComponent},
  // {path: 'orders', component: OrdersComponent},
  {path: 'orderskitchen', component: OrdersKitchenComponent},
  {path: '**', component: Page404Component} //mientras login hasta tener un componente de error

];

@NgModule({
  // cargamos todas las configuraciones de la ruta
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
