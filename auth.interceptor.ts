import { HttpEvent, HttpHandler, HttpInterceptor, HttpErrorResponse,HttpRequest } from "@angular/common/http";
import { Observable,throwError } from 'rxjs'
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core"
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
constructor(private loginService:LoginService)
{}


intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}