// my-error-interceptor.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorMessageService } from './error-message.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor(private errorMessageService: ErrorMessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400 && error.error.errors) {
          const errorMessage = Object.keys(error.error.errors)
            .map((key) => error.error.errors[key].join(' '))
            .join(' ');
          this.errorMessageService.setErrorMessage(errorMessage);
        }
        return throwError(error);
      })
    );
  }
}
