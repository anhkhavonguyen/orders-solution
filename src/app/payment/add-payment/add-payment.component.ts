import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Payment } from 'src/app/shared/interfaces/payment';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  addValueForm: FormGroup = new FormGroup({});
  constructor(private paymentService: PaymentService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValueForm = this.formBuilder.group({
      orderId: [''],
      method: [''],
      state: [''],
    });
  }

  addPayment(): void {
    const orderId = this.addValueForm.get('orderId').value;
    const method = this.addValueForm.get('method').value;
    const state = this.addValueForm.get('state').value;

    const newPayment: Payment = {
      orderId: orderId,
      method: method,
      state: state
    };

    this.paymentService.add(newPayment)
      .subscribe(
        (data: Payment) => console.log(data),
        (err: any) => console.log(err),
        () => this.router.navigate(['/Payments'])
      );
  }
}
