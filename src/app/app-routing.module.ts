import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'payments' },
  {
    path: 'payments',
    loadChildren: './payment/payment.module#PaymentModule'
  },
  {
    path: 'orders',
    loadChildren: './order/order.module#OrderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
