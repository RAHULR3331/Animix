import {
  assertPlatform,
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execute
  //class- collection of properties and functions 
  //properties/variable
  aim = "Your perfect bannking partner"

  account = "Enter you account here"
  email=""
  pswd=""

  //login model
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 @.]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 !@#]*')]]
  })
  

  

  //function/methods - user defined functions  //4th execute
// //dependancy injection

  constructor( private ds:DataService , private router:Router, private fb:FormBuilder) { // 1st execute
    //it automatically invokes when the object is created
    //object initialization
  }

  ngOnInit(): void { //2rd execute
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorize
  }
  emailChange(event: any) {
    console.log(event);
    this.email=event.target.value;
    console.log(this.email);

  }
  pswdChange(event:any){
    console.log(event);
    this.pswd=event.target.value;  
    console.log(this.pswd)
  }
  login(){
    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;

    if(this.loginForm.valid){
      this.ds.login(email,pswd)
      .subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
        localStorage.setItem('currentemail',JSON.stringify(result.currentemail));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message);
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      })
    }
  }
}
 

