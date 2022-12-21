import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss'],
})
export class OrderReviewComponent {
  cart: any = [];
  orderTotal = localStorage.getItem('orderTotal') || '';
  constructor(public router: Router) {
    const cartString = localStorage.getItem('cart') || '';
    if (cartString) {
      this.cart = JSON.parse(cartString);
    }
  }
  thankyouPage(): void {
    this.router.navigate(['thankyou']);
  }
}
