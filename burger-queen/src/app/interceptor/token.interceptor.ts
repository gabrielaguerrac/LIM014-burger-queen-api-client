import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('INTERCEPTA YUJU');
        const token = localStorage.getItem('accessToken');
        console.log(token);
        
        if (!token) {
            return next.handle(req)
            .pipe (
                catchError((error)=>{
                    console.log('MISTAKE, BABE, POR INTERCEPTOR');
                    return throwError(error);
                })
            );
        } else {
            const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`)
            req = req.clone({
                headers
            });
            return next.handle(req);
        }
        // if (token) {
        //     const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`)
        //     req = req.clone({
        //         headers
        //     });
        //     return next.handle(req);
            
        // } else {
        //     return next.handle(req)
        //     .pipe (
        //         catchError((error)=>{
        //             console.log('MISTAKE, BABE, POR INTERCEPTOR');
        //             return throwError(error);
        //         })
        //     );
        // }
    }
}