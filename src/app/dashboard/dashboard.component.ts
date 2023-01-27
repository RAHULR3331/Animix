import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  user='';
  
  allanimie:any=[]; //array of all animes details
  searchterm:string=''
  manga:any
  currentemail:any;

  constructor(private api:ApiService) { 
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'')
      }

      if (localStorage.getItem('currentemail')) {
        this.currentemail = localStorage.getItem('currentemail')
    
  }
}

  ngOnInit(): void {
    this.api.getanime().subscribe(
      (data:any)=>{
        this.allanimie=data.animies;
      }
    )
    this.api.searchkey
    .subscribe((data:any)=>{
      this.searchterm=data

    }
    )
  }

  
  
  addtowatchlist(id:any,name:any,description:any,Rating:any,episode:any,categorie:any,studio:any,img:any){
if(this.currentemail){
      // var num=1
      const result = this.api.addtowatchlist(this.currentemail,id,name,description,Rating,episode,categorie,studio,img)
      .subscribe((result:any)=>{
        alert(result.message) 
      },
      (result: any) => {
        alert(result.error.message)
      }
      )
    }
  }
  
    
  }

  




