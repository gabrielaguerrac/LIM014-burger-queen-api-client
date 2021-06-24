import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('INTERCEPTA YUJU, pero no lo toma de local storage');
        const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNzk2ODg0LCJleHAiOjE2MjM4MDA0ODR9.8tDX3i4afFU7TAFfvg11ngvIJOYgZZ2oQDpLu0xYrpg";
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