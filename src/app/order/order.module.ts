import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [OrdersComponent, OrderEditComponent, AddOrderComponent]
})
export class OrderModule { }
