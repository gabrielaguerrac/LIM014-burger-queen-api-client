import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(private authService: AuthService,
    private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(localStorage.getItem('accessToken'))
      const token:any = localStorage.getItem('accessToken')
      console.log(token);
      const tokenObject:any = jwtDecode(token)
      console.log(tokenObject)
     if(!tokenObject.roles.admin){
      this.router.navigate(['']);
      localStorage.clear;
       return false;
     } else{
       return true;
     }
  }
  
}
