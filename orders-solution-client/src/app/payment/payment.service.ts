import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Payment } from '../shared/interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private API = 'http://localhost:3000/Payments';

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    return this
      .http
      .get<Payment[]>(`${this.API}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  add(newPayment: {}): Observable<any> {
    return this
      .http
      .post<Payment>(`${this.API}`, newPayment)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }
}
