import { Component , OnInit } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Form } from '@angular/forms';
import { Token } from '../models/auth';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../services/user/users.service';
import { UserModel } from '../models/user.model';


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
      private router: Router,   
      private userService: UsersService,
    ){ }
  // método que permite iniciar el componente luego del constructor
  ngOnInit(){}
  redirect(){
    this.router.navigate(['/user']);
}

  public sendCredentials(form: any){
    // this.authService.loginUser({email: this.email, password: this.password})  
    //   .subscribe((response: Token) => {
    //       console.log(this.email);
    //       this.userService.getUserId(this.email, response)
    //       .subscribe((res: UserModel) => {
    //         console.log(res);
            
    //       })
    //     this.redirect();
    //   }) 
    //   form.reset();
      this.authService.loginUser({email: this.email, password: this.password})
      .subscribe((response: Token) => {
          console.log(this.email);
          console.log(response);
         
          this.redirect();
         })
      form.reset();
  }

  
}
