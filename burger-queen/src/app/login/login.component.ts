import { Component , OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    public titulo: string;
    public listado: string;
    // private email: string;
    // private password: string;
    
    // método que se ejecuta cuando carga un objeto
    constructor(){
      this.titulo = 'Master';
      this.listado = 'Lista';
        // this.email = document.getElementById('email-input');
        // this.password = "Input";
        
        console.log('achuz!');
    }

    // método que permite iniciar el componente luego del constructor
    ngOnInit(){}
    ngOnDestroy(){
        console.log('OnDestroy ejecutado');
    }
  }

