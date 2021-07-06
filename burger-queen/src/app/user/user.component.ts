import { Component, OnInit } from '@angular/core';
import { UserDetailModel } from '../models/user.model';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userData: any
  users: Array<UserDetailModel>
  show: boolean;

  constructor(private usersService: UsersService,) { 
    this.userData = null //arreglo con un solo elemento, un solo obj usuario
    this.users = [] //arreglo con allUsers()
    this.show = false; 
  }

  ngOnInit(): void {
    this.showUsers()
  }

  showUsers (){
    this.usersService.getAllUsers()
    .subscribe((response: any) => { 
      // this.user = response
      // console.log(this.user);
      this.allUsers(response);
      // this.getUserProperties(this.users);
    })

  }

  allUsers (elem:Array<UserDetailModel>){
    elem.forEach((elem: UserDetailModel)=>{
      this.users.push(elem);
    })
    
  } 

  newUser(userDetail: any){
    //llamar al servicio
    console.log('en user component');
    console.log(userDetail);
    this.usersService.addUser(userDetail)
    .subscribe((response: any) => {
      
     this.userData = response; // lo q devuelve mockoon
      console.log(this.userData);
      this.users.push(this.userData);
    })
  }

  getFormNewUser(elem: boolean){
    console.log('click en new user');
    this.show = elem;
  }

  closeFormNewUser(elem:boolean){
    this.show = elem;
  }

  editUser(singleUser: any){
    console.log(singleUser._id);
    this.usersService.getCurrentUser(singleUser._id)
    .subscribe((response:any) => {
      console.log(response);
    })
  }

  getCurrentUserForm(user: any){
    this.show= true;
  }

  deleteUser(){
    console.log('click en delete');
    
  }

}


