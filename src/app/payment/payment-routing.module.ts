import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PaymentsComponent
}, {
  path: 'add-payment',
  pathMatch: 'full',
  component: AddPaymentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
