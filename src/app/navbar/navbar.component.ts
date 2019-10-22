import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import {UserService} from '../user/user.service'
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string
  user:any
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  isAuth(){
   let auth=  this.userService.isAuth()
    if(auth){
      this.email()
    }
   return auth
  }

  email(){
    this.user=this.userService.getEmail()
  }

  logout(){
    this.userService.logout()
  }
}
