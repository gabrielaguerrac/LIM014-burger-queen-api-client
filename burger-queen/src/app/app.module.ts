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


@NgModule({
  // aquí va las directivas y componentes y pipes?
  // escribiendo aquí, ya lo puedo llamar en cualquier lado de mi aplicación
  declarations: [
    AppComponent,
    LoginComponent,
    BarSideComponent
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
