import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.css']
})
export class BarSideComponent implements OnInit {
  @Output() logout: EventEmitter<boolean> = new EventEmitter();

  isAdmin: boolean=true;
  token: any
  constructor() { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(){
    const token: any = localStorage.getItem('accessToken');
    this.token = token;
    const role: any = jwtDecode(token);

    if(role.roles.admin){
      // console.log(role.roles.admin);
      this.isAdmin;
      // console.log(this.isAdmin);
    } else {
      this.isAdmin =! this.isAdmin;
    }
  }

  logoutBarside(){
    this.logout.emit()
    // localStorage.removeItem('accessToken');
  }
}
