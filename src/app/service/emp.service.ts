import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
 apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    var API_URL = 'http://localhost:8080/post';
    return this.http.post(API_URL, data,{'headers':this.headers}).pipe(catchError(this.handleError))
  }

  list(){
    var API_URL='http://localhost:8080/get';
    return this.http.get(API_URL,{'headers':this.headers});
  }

  get(id:number):Observable<any>{
    var API_URL=`${this.apiUrl}/get/${id}`;
    return this.http.get(API_URL,{headers:this.headers});
  }

  update(id:number,data:any):Observable<any>{
    var API_URL=`${this.apiUrl}/put/${id}`;
    return this.http.put(API_URL,data,{headers:this.headers}).pipe(
      catchError(this.handleError)
    )
  }  

  delete(id:number):Observable<any>{
    console.log(id);
    var API_URL=`${this.apiUrl}/delete/${id}`;
    return this.http.delete(API_URL)
    .pipe(
      catchError(this.handleError)
      );
  }
  // Handle API errors
  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}