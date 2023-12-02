// error-message.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  private errorMessageSubject = new Subject<string>();

  errorMessage$ = this.errorMessageSubject.asObservable();

  setErrorMessage(message: string): void {
    this.errorMessageSubject.next(message);
  }
}
