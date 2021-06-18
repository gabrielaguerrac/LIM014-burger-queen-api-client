import { Component , OnInit , OnDestroy, Input } from '@angular/core';

import { Form } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Token } from '../models/auth';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent implements OnInit {
    email= "";
    password= "";

    // método que se ejecuta cuando carga un objeto
    constructor(private authService: AuthService){
        
    }

    // método que permite iniciar el componente luego del constructor
    ngOnInit(){
        console.log('OnInit ejecutado');
    }
    

    // login(){
    //     console.log(email.value);
    //     console.log(password.value);
    // }

    public sendCredentials(form: any){
        this.authService.postCredential({email: this.email, password: this.password})  
        .subscribe((response: Token) => {
            console.log(response);
            // get email
            //add el cambio de pantalla
            (error: any) => {
                console.log(error);
            }
        }) 
        form.reset();
    }
  }