import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaymentsComponent, AddPaymentComponent]
})
export class PaymentModule { }
