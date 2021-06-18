import { Component , OnInit } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Form } from '@angular/forms';
import { Token } from '../models/auth';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email= "";
  password="";
  // método que se ejecuta cuando carga un objeto
  constructor(
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router 
    ){ }
  // método que permite iniciar el componente luego del constructor
  ngOnInit(){}
  redirigir(){
    this.router.navigate(['/user']);
}

  public sendCredentials(form: any){
      this.authService.postCredential({email: this.email, password: this.password})  
      .subscribe((response: Token) => {
          console.log(response);
          // get email
          //add el cambio de pantalla
        // si el usuario es admin: true, entonces que se cumplea el redirigir a user
        this.redirigir();
      }) 
      form.reset();
  }

  
}
