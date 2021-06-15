import { Component , OnInit , OnDestroy } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    public titulo: string;
    public listado: string;

    // método que se ejecuta cuando carga un objeto
    constructor(){
        this.titulo = "Manager";
        this.listado = "Input";
        
        console.log('achuz!');
    }

    // método que permite iniciar el componente luego del constructor
    ngOnInit(){
        console.log('OnInit ejecutado');
    }
    ngOnDestroy(){
        console.log('OnDestroy ejecutado');
    }
  }