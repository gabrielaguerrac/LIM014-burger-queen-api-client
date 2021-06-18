import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarSideWaiterComponentComponent } from './bar-side-waiter-component/bar-side-waiter-component.component';

@NgModule({
  // aquí va las directivas y componentes y pipes?
  // escribiendo aquí, ya lo puedo llamar en cualquier lado de mi aplicación
  declarations: [
    AppComponent,
    LoginComponent,
    BarSideWaiterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
