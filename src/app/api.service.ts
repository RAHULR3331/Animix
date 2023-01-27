import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchkey= new BehaviorSubject('');

  constructor(private http:HttpClient) {}
  getanime(){
    return this.http.get('http://localhost:3000/getmanga')
  }

  //add to Watchlist
addtowatchlist(email:any,id:any,name:any,description:any,Rating:any,episode:any,categorie:any,studio:any,img:any){

  const body={
    
    email,
    id,
    name,
    description,
    Rating,
    episode,
    categorie,
    studio,   
    img,
  }

return this.http.post('http://localhost:3000/addtowatchlist',body)
}

//get watch list
getwatchlist(email:any){
  const body={
    email
  }
  return this.http.post('http://localhost:3000/getwatchlist',body)
}


//to delete a anime from watch list
deletefromwatchlist(email:any){
  return this.http.delete('http://localhost:3000/deletewatchlist/'+email)
}

}
