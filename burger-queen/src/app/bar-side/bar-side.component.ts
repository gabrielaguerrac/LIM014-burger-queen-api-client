import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.css']
})
export class BarSideComponent implements OnInit {

  isAdmin: boolean=true;

  constructor() { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(){
    const token: any = localStorage.getItem('accessToken');
    const role: any = jwtDecode(token);

    if(role.roles.admin){
      // console.log(role.roles.admin);
      this.isAdmin;
      // console.log(this.isAdmin);
    } else {
      this.isAdmin =! this.isAdmin;
    }
  }

}
