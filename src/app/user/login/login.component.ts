import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  private email:FormControl
  private password:FormControl
  // [a-zA-Z].*
  constructor() { }

  ngOnInit() {
    this.email  = new FormControl('',[Validators.required,emailValid()])
    this.password = new FormControl('',Validators.required)

  this.loginForm = new FormGroup({
        email:this.email,
        password:this.password
     })
  }

  validateEmail(){
    return this.email.valid || this.email.untouched
  }

  validatePassword(){
    return this.password.valid || this.password.untouched
  }

  login(formValues){
      console.log(formValues)
  }

}

function emailValid(){
  return control=>{
    var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(control.value)? null:{invalidEmail:true}
  }
}
