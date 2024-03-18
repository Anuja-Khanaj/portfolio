import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { msg } from '../Model/msg';

@Injectable({
  providedIn: 'root'
})
export class LogService {
 http: HttpClient  = inject(HttpClient)
  constructor( http: HttpClient) { }
  Contact(task:msg){
    this.http.post('https://angularhttp-ed902-default-rtdb.firebaseio.com/msg.json', task).subscribe((response)=>{
      console.log(response);
      
  });
  }
}
