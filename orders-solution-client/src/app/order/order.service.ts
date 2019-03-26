import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Order } from '../shared/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API = 'http://localhost:4000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this
      .http
      .get<Order[]>(`${this.API}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getOrderDetails(id: number): Observable<Order> {
    return this
      .http
      .get<Order>(`${this.API}/${id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addOrder(order: Order): Observable<Order> {
    return this
      .http
      .post<Order>(`${this.API}`, order)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateOrder(order: Order): Observable<Order> {
    return this
      .http
      .put<Order>(`${this.API}/update/${order.id}`, order)
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
