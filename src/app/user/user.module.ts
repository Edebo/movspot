import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {userRoute} from './user-routing.module'

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
