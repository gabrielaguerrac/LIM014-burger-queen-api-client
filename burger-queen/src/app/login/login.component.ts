import { Component , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { throwError } from 'rxjs';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email= "";
  password="";

  constructor( // método que se ejecuta cuando carga un objeto
      private authService: AuthService,
      private router: Router,
  ){ }
  
  ngOnInit(){} // método que permite iniciar el componente luego del constructor

  login(form: any){
      this.authService.loginUser({email: this.email, password: this.password})
      .pipe(
        catchError((error)=>{
          console.log('ERROR:', error);
          return throwError(error);
        })
      )  
      .subscribe((response) => {                
          const token: any = jwtDecode(response.token);
          console.log(token);
          window.localStorage.setItem('accessToken', response.token);
          localStorage.getItem('accessToken');
        if (token.roles.admin === true) {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/roleselector']);
        }
      })   
      form.reset();
  }
}
