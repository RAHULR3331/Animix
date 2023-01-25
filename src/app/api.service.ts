import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchkey: any;

  constructor(private http:HttpClient) {}
  getanime(){
    return this.http.get('http://localhost:3000/getmanga')
  }

  addtowatchlist(manga:any){
    const body={
      id:manga.id,
      name:manga.title,
      description:manga.price,
      Rating:manga.image,
      categorie:manga.description,
      studio:manga.image,
      img:manga.image,

    }
    return this.http.post('http://localhost:3000/addtowatchlist',body)
  }
}
