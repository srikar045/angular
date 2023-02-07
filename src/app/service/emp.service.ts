import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  requestHeader = new HttpHeaders({ "No-Auth": "True" }).set('Content-Type', 'application/json');
  constructor(private http: HttpClient,
    private ser: UserServiceService) { }

//--------------------------Login Method------------------------------------------------ 
    
  login(form: any) {
    return this.http.post(this.apiUrl + '/authenticate', form, { 'headers': this.requestHeader });
  }

  public roleMatch(allowedRoles: any[]): boolean {
    let isMatch = false;
    
    const userRole: any = this.ser.getRoles();
    // console.log(userRole);
    if (userRole != null && userRole) {
    
      for (let i = 0; i < userRole.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
    
          if (userRole[i].role === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
          //  else {
          //   return isMatch;
          // }
        }
      }
      return isMatch;
    }
    return true;
  }

// ------------------------Employee Services------------------------------------------
  
  create(data: any): Observable<any> {
    var API_URL = 'http://localhost:8080/post';
    return this.http.post(API_URL, data, { 'headers': this.headers })
    // .pipe(catchError(this.handleError))
  }

  list() {
    var API_URL = 'http://localhost:8080/get';
    return this.http.get(API_URL, { 'headers': this.headers });
  }

  get(id: number): Observable<any> {
    var API_URL = `${this.apiUrl}/get/${id}`;
    return this.http.get(API_URL, { headers: this.headers });
  }

  update(id: number, data: any): Observable<any> {
    var API_URL = `${this.apiUrl}/put/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  delete(id: number): Observable<any> {
    console.log(id);
    var API_URL = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.handleError)
      );
  }

//------------------------------Con_room------------------------------------------

rcreate(data: any): Observable<any> {
  var API_URL = 'http://localhost:8080/Rpost';
  return this.http.post(API_URL, data, { 'headers': this.headers })
 // .pipe(catchError(this.handleError))
}

rlist(){
  var API_URL = 'http://localhost:8080/Rget';
    return this.http.get(API_URL, { 'headers': this.headers });
}
rget(id:number):Observable<any>{
var API_URL=`${this.apiUrl}/Rget/${id}`;
return this.http.get(API_URL, { headers: this.headers });
}
rupdate(id: number, data: any): Observable<any> {
  var API_URL = `${this.apiUrl}/Rput/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers }).pipe(
    catchError(this.handleError)
  );
}

rdelete(id: number): Observable<any> {
  console.log(id);
  var API_URL = `${this.apiUrl}/dell/${id}`;
  // 'http://localhost:8080/delete/${id}'
  // `${this.apiUrl}/Rdelete/${id}`
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.handleError)
    );
}
//------------------------------Booking--------------------------------------------

book(data:any):Observable<any>{
  var API_URL=`${this.apiUrl}/book`;
  return this.http.post(API_URL,data, { 'headers': this.headers })
  // .pipe(catchError(this.handleError))
  ;
}

bookid(id:number):Observable<any>{
var API_URL=`${this.apiUrl}/getbook/${id}`;
return this.http.get(API_URL).pipe(catchError(this.handleError));
}

booking():Observable<any>{
var API_URL=`${this.apiUrl}/getbook`;
return this.http.get(API_URL).pipe(catchError(this.handleError));
}

bedit(id:number,data:any):Observable<any>{
var API_URL=`${this.apiUrl}/putbook/${id}`;
return this.http.put(API_URL,data,{headers:this.headers}).pipe(
  catchError(this.handleError)
);
}
beditt(id:number,data:any):Observable<any>{
  var API_URL=`${this.apiUrl}/puttime/${id}`;
  return this.http.put(API_URL,data,{headers:this.headers})
  // .pipe(catchError(this.handleError))
  ;
}

bdelete(id:number):Observable<any>{
  var API_URL=`${this.apiUrl}/del/${id}`;
  return this.http.delete(API_URL).pipe(
    catchError(this.handleError)
  );
}

//------------------------- Handle API errors--------------------------------------
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

//---------------------------------THE END-----------------------------------------  
}