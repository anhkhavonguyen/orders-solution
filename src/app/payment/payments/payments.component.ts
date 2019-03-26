import { Component, OnInit } from '@angular/core';
import { Payment } from '../../shared/interfaces/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Payment[];

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.allPayments();
  }

  allPayments() {
    this.paymentService.getPayments()
      .subscribe(
        (res: any) => this.payments = res.data
      );
  }
}
