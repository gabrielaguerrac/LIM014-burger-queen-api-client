// archivo que permite iniciar la app de angular
// compendio de módulos que se va creando
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './services/user/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarSideComponent } from './bar-side/bar-side.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { OrdersKitchenComponent } from './orders-kitchen/orders-kitchen.component';
import { ProductivityKitchenComponent } from './productivity-kitchen/productivity-kitchen.component';
import { UserComponent } from './user/user.component';


@NgModule({
  // aquí va las directivas y componentes y pipes?
  // escribiendo aquí, ya lo puedo llamar en cualquier lado de mi aplicación
  declarations: [
    AppComponent,
    LoginComponent,
    BarSideComponent,
    ProductsComponent,
    OrdersComponent,
    WaiterTablesComponent,
    OrdersKitchenComponent,
    ProductivityKitchenComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
