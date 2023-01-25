import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user='';
  constructor(private api:ApiService) {
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'')
      }
   }

  ngOnInit(): void {
  }




  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

}
