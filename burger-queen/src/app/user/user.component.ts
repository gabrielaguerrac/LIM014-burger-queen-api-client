import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { UserDetailModel, IUserModel } from '../models/user.model';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // userData: IUserModel
  userData: any
  users: Array<UserDetailModel>
  show: boolean;
  p: number = 1;
  objdeleted: Object={
    _id:'',
    email:'',
    roles: {
      admin: null
    }
  }

  constructor(private usersService: UsersService,) { 
    this.userData = {} //arreglo con un solo elemento, un solo obj usuario
    this.users = [] //arreglo con allUsers()
    this.show = false; 
  }

  ngOnInit(): void {
    this.showUsers()
  }

  changeRole(role:string){

  }

  showUsers (){
    this.usersService.getAllUsers()
    .subscribe((response: any) => { 
      // this.user = response
      // console.log(this.user);
      console.log(response)
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

  deleteUser(id: any){
    console.log(id);
    this.removeItem(id)
    this.usersService.deleteUser(id)
    .subscribe((response)=>{
     this.objdeleted = response
     console.log(this.objdeleted);
     
      })
    }
 
  removeItem(idD: any) {
    // this.listCart = this.cart.getValue();
    let objIndex = this.users.findIndex(((obj: any) =>{ 
      console.log(obj._id)
      console.log(idD)
      obj._id === idD
    }));
    console.log(objIndex)
    if (objIndex != -1) {
      // this.listCart[objIndex].qty = 1;
      this.users.splice(objIndex, 1);
    }
   
  }

  ngOnDestoy(){
    this.showUsers()
  }

  // deleteUser(){
  //   console.log('click en tacho');
    
  // }

}


