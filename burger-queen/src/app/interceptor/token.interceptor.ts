import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('INTERCEPTA YUJU, pero no lo toma de local storage');
        const newToken = localStorage.getItem('accessToken')
        console.log(newToken);    
        if (newToken) {
            const headers = new HttpHeaders().append('Authorization', `Bearer ${newToken}`)
            req = req.clone({
                headers
            });
        } 
        return next.handle(req)
        .pipe (
            catchError((error)=>{
                console.log('MISTAKE, BABE, POR INTERCEPTOR');
                return throwError(error);
            })
        );
    }
}