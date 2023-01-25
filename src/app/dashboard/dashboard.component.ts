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

  constructor(private api:ApiService) { 
    
  }

  ngOnInit(): void {
    this.api.getanime().subscribe(
      (data:any)=>{
        this.allanimie=data.products;
      }
    )
    this.api.searchkey.subscribe((data:any)=>{
      this.searchterm=data

    }
    )
  }

    addtowatchlist(manga:any){
      this.api.addtowatchlist(manga).subscribe(
        (result:any)=>{
          //server to client
          alert(result.message)  //added succussfulyy
  
        },
        (result:any)=>{
          // alert(result.error.message)   //error message
        }
      )
    }

  }




