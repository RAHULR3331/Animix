import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {


  watchlist:any
  emsg:any
  email:any
  confirmService: any;

  constructor(private api : ApiService,private router:Router) {
    this.email=localStorage.getItem('currentemail')
    this.getwatchlist(this.email)
   }

  ngOnInit(): void {
  }


  getwatchlist(email:any){
    const result = this.api.getwatchlist(email)  
    .subscribe(
      (result:any)=>{
      this.watchlist=result.watchlist
      if(this.watchlist.length==0){
        this.emsg='Empty Wishlist'
      }

    },
    (result: any) => {
      alert('NO movies in Watchlist')
      alert(result.error.message)
      this.emsg=result.error.message
    })
    
  }

  
deletewatchlist(animie:any){
  
    this.api.deletefromwatchlist(animie.email)
    .subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('watchlist')
        this.watchlist=result.watchlist
        window.location.reload()
   
        
      },
  (result:any)=>{
    alert(result.error.message)
  }
    )
  
  }

}
