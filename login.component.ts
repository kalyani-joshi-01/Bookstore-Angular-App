import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit
{
 

errormsg:string;
  credentials={
    'username':'',
    'password':''
  }
  constructor(private loginService:LoginService,private http:HttpClient) { }

  ngOnInit(): void {
      
  }

  onSubmit()
  {
    
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null))
    {

      console.log("we have to submit form");
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{

          //if suucees generating token
          console.log(response.token);
          
          this.loginService.loginUser(response.token)
          window.location.href="/dashboard"
        },
        error=>{
          //or error
          this.errormsg = 'Invalid user credentials.';
          
          

        }
      )

    }else{
      console.log("Fields are empty");
      
      
    }

  }

  }
