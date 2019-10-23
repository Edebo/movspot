import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserService {
      //setting the header
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'

  })
};
  constructor(private http:HttpClient) {

   }

   signUp(data){
    return this.http.post('https://movspot.herokuapp.com/api/auth/signup',JSON.stringify(data),this.httpOptions)
   }

   signIn(data){
    return this.http.post('https://movspot.herokuapp.com/api/auth/signin',JSON.stringify(data),this.httpOptions)
   }

   saveUserData(userData){

    if(typeof window!==undefined){
        sessionStorage.setItem('user',JSON.stringify(userData))
        return true
    }
   }

   isAuth(){

    if(typeof window!==undefined){
        if(sessionStorage.getItem('user')){
            return true
        }
        return false
    }

  }

  getEmail(){
    let user = {}
    if(typeof window!==undefined){
      if(sessionStorage.getItem('user')){
        user=JSON.parse(sessionStorage.getItem('user'))
      }
      return user
  }
  }

  logout(){
    if(typeof window!==undefined){
      if(sessionStorage.getItem('user')){
          sessionStorage.clear()
      }
      return false
  }
  }

}
