import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  foods: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  selectedBook: any;
  selectedFav: any;
  order: Order;
  readingList: {};
  favorite: any;

  constructor(private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const param = +this.route.snapshot.paramMap.get('id');
    // if (param) {
    //   console.log(param);
    //   const id = param;
    //   this.getOrder(id);
    // }
    // this.getBooks();
  }

  getOrder(id: number) {
    this.orderService.getOrderDetails(id)
      .subscribe(
        (results: Order) => {
          this.order = results;
        }
      );
  }
}
