import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import {UserService} from '../user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  success:boolean=false
  signupForm:FormGroup
  private email:FormControl
  private password:FormControl
  private confirmPassword:FormControl
  // [a-zA-Z].*
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.email  = new FormControl('',[Validators.required,emailValid()])
    this.password = new FormControl('',Validators.required)
    this.confirmPassword= new FormControl('',Validators.required)

  this.signupForm = new FormGroup({
        email:this.email,
        password:this.password,
        confirmPassword:this.confirmPassword
     })
  }

  validateEmail(){
    return this.email.valid || this.email.untouched
  }

  validatePassword(){
    return this.password.valid || this.password.untouched
  }
  isValid(control){

     return this.signupForm.controls[control].invalid && this.signupForm.controls[control].touched;

  }

  mustMatch(){
    return this.confirmPassword.touched && this.password.value !== this.confirmPassword.value
  }

  SignUp(){
    let value:{} = this.signupForm.value
    // console.log(this.password,this.signupForm.value)
    this.userService.signUp(value).subscribe(res=>{

     let result :any= res
      console.log(result,result.message)
      if(result.status === 'success'){
        setTimeout(()=>{
          this.router.navigate(['/user/login']);
        },3000)
          this.success = true

      }

    },err=>{
      console.log(err)
    })
  }
}

function emailValid(){
  return control=>{
    var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(control.value)? null:{invalidEmail:true}
  }
}
