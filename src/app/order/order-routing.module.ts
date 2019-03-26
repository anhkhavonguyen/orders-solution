import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderEditComponent } from './order-edit/order-edit.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: OrdersComponent
}, {
  path: 'add-order',
  pathMatch: 'full',
  component: AddOrderComponent
}, {
  path: 'edit-order',
  // path: ':id',
  pathMatch: 'full',
  component: OrderEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
