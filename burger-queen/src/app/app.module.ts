// archivo que permite iniciar la app de angular
// compendio de módulos que se va creando
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/interceptor/token.interceptor';
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
import { Page404Component } from './page404/page404.component';
import { RoleSelectorComponent } from './role-selector/role-selector.component';
import { TableClientComponent } from './table-client/table-client.component';
import { OrdersCarComponent } from './orders-car/orders-car.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { InventoryAdminComponent } from './inventory-admin/inventory-admin.component';
import { FormNewProductComponent } from './form-new-product/form-new-product.component';




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
    UserComponent,
    Page404Component,
    RoleSelectorComponent,
    TableClientComponent,
    OrdersCarComponent,
    FormNewUserComponent,
    InventoryAdminComponent,
    FormNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsersService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
