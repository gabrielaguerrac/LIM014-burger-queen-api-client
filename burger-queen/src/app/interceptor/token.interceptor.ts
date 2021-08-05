import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const newToken = localStorage.getItem('accessToken')  
        if (newToken) {
            const headers = new HttpHeaders().append('Authorization', `Bearer ${newToken}`)
            req = req.clone({
                headers
            });
        } 
        return next.handle(req)
        .pipe (
            catchError((error)=>{
                console.log('MISTAKE, POR INTERCEPTOR');
                return throwError(error);
            })
        );
    }
}