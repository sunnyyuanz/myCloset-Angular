import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent {
  cart: any = [];
  orderTotal = 0;
  constructor(public router: Router) {
    const cartString = localStorage.getItem('cart') || '';
    if (cartString) {
      this.cart = JSON.parse(cartString);
      console.log(this.cart);
    }
    this.calculateOrderTotal();
  }
  calculateOrderTotal(): void {
    this.cart.forEach((item: any) => {
      this.orderTotal += item.totalPrice;
    });
  }
  checkoutView(): void {
    localStorage.setItem('orderTotal', JSON.stringify(this.orderTotal));
    this.router.navigate(['order-review']);
  }
  clickToRemove(item: any): void {
    const index = this.cart.findIndex((element: any) => element === item);
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    location.reload();
  }
  continueShopping(): void {
    this.router.navigate(['']);
  }
}
