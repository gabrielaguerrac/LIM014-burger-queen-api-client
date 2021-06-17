import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { LoginComponent } from "../login/login.component";

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       Authorization: 'my-auth-token'
//     })
//   };

@Injectable({
    providedIn: "root"
})




export class UserService {

    constructor(private httpclient: HttpClient) {
        console.log('constructor de loginService');
        
    }

    // public post(url: string, body){
    //     return this.httpclient.post(url, body);
    // }
}
