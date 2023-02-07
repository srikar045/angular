import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MlapiService {

  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  requestHeader = new HttpHeaders({ "No-Auth": "True" }).set('Content-Type', 'application/json');
  constructor(private http: HttpClient,
  ) { }


  //-------------------------Con_room--------------------------- 
  roomlist() {
    var API_URL = 'http://localhost:8080/Rget';
    return this.http.get(API_URL, { 'headers': this.headers });
  }

  //----------------------Booking------------------------------
  booklist() {
    var API_URL = `${this.apiUrl}/getbook`;
    return this.http.get(API_URL,{ 'headers': this.headers });
  }
  
  book(data:any) {
    var API_URL = `${this.apiUrl}/getbook/${data}`;
    return this.http.get(API_URL);
  }

  mybook(data:any){
    var API_URL = `${this.apiUrl}/getmybook/${data}`;
    return this.http.get(API_URL);
  }

  del(id:number):Observable<any>{
    var API_URL=`${this.apiUrl}/del/${id}`;
    return this.http.delete(API_URL);
  }

  reserve(data: any): Observable<any> {
    var API_URL = `${this.apiUrl}/book`;
    return this.http.post(API_URL, data, { 'headers': this.headers });
  }

  tedit(id: number, data: any): Observable<any> {
    var API_URL = `${this.apiUrl}/putbook/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers });
  }

  tteditt(id: number, data: any): Observable<any> {
    var API_URL = `${this.apiUrl}/puttime/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers });
  }

}
