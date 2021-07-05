import { Component, OnInit } from '@angular/core';
import { UserDetailModel } from '../models/user.model';
import { FormUserDetailModel } from '../models/formUser.model';
import { UsersService } from '../services/user/users.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  

  user: Array<UserDetailModel>
  users: Array<UserDetailModel>
  userProperties: Array<any>;
  show: boolean;



  constructor(private usersService: UsersService,) { 
    this.user = [] //arreglo de usuario igualado a response, sin allUsers
    this.users = [] //arreglo con allUsers()
    this.userProperties = [];
    this.show = false;
    
  }

  ngOnInit(): void {
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

  newUser(form: any){
    //llamar al servicio
    console.log('en user component');
    this.usersService.addUser(form)
    .subscribe((response: any) => {
      console.log(response,'response new user');
      
    })
  }

  // getUserProperties(elem: Array<UserDetailModel>){
  //   console.log(elem);
  //   const p = Object.keys(elem);
  //   console.log(p);
  //   this.userProperties.push(p)
  
      
  //     this.userProperties.push(p);
  //   })
  //   console.log(this.userProperties)


  getFormNewUser(elem: boolean){
    console.log('click en new user');
    this.show = elem;
  }

  closeFormNewUser(elem:boolean){
    this.show = elem;
  }

  editUser(){
    console.log('click en edit');
  }

  deleteUser(){
    console.log('click en delete');
    
  }


}
function getAllUsers() {
  throw new Error('Function not implemented.');
}

