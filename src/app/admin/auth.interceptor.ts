import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { UserServiceService } from "../service/user-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userAuthService: UserServiceService,
        private router: Router) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();

        req = this.addToken(req, token);

        return next.handle(req)
        .pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    console.log(err);
                    alert(err.error.text);
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    } else if (err.status === 403) {
                        this.router.navigate(['/forbidden']);
                    }else if(err.status===200){
                        return throwError("ok");
                    }
                    return throwError("Some thing is wrong");
                }
            )
        )
        ;
    }


    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }
}