import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9595"

  constructor(private http:HttpClient) { }
  //calling server to generate the token
  generateToken(credentials:any){

    //token generate
    return this.http.post(`${this.url}/token`,credentials)
  }

  //for login user
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
//to check that is user logged in or not
  isLoggedIn()
  {
   let token= localStorage.getItem("token");

   if(token==undefined || token==='' || token==null)
   {
    return false;
   }else{
    return true;
   }
  }
//for logout the user
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }
  //for getting the token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
