// import { NgLocaleLocalization } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Injectable,
  Type
} from '@angular/core';

//global http header object
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = '';
  //to hold account number
  currentemail = "";
  
  

  //to hold transaction details
  // transaction="";

  constructor(private http:HttpClient) {
    // this.getDetails();
  }
  //saveDetalis -to save details in local storage 
  saveDetails() {
    //DataBase
    if (this.userDetails) {
      localStorage.setItem('DataBase', JSON.stringify(this.userDetails))
    }
    //CurrentUser 
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    }
    //Currentemail
    if (this.currentemail) {
      localStorage.setItem('currentemail', JSON.stringify(this.currentemail))
    }
  }

  //database
  userDetails: any = {
    
  }

  register(email: any, username: any, pswd: any){
const data={
  email,
  pswd,
  username
}
return this.http.post('http://localhost:3000/register',data)

  }

  login(email: any, pswd: any) {
    const data={
      email,
      pswd
    }

    return this.http.post('http://localhost:3000/login',data)
  }

  getToken(){
    //fetch token from localstorage
    const token=JSON.parse(localStorage.getItem('token')||'')
    //append token inside the header
    let headers=new HttpHeaders()
    if(token){
      options.headers=headers.append('x-access-token',token)
    }
    return options
    
  }


  //Delete
  deleteAcc(email: any) {
    return this.http.delete('http://localhost:3000/deleteAcc/'+email)
  }

}
