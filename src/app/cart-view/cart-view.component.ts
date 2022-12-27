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
  empty = true;
  /**
   * "empty" here is the handler for deciding if the checkout button should show, if cart is empty then checkout button should be hidden, vice versa it should be showing.
   */
  constructor(public router: Router) {
    const cartString = localStorage.getItem('cart') || '';
    if (cartString) {
      this.cart = JSON.parse(cartString);
      console.log(this.cart);
      this.empty = false;
    }
    this.calculateOrderTotal();
  }
  calculateOrderTotal(): void {
    this.cart.forEach((item: any) => {
      this.orderTotal += item.totalPrice;
    });
  }
  checkoutView(): void {
    /**orderTotal need to be use in order review page, so we need to save it to local storage as well */
    localStorage.setItem('orderTotal', JSON.stringify(this.orderTotal));
    this.router.navigate(['order-review']);
  }
  clickToRemove(item: any): void {
    const index = this.cart.findIndex((element: any) => element === item);
    this.cart.splice(index, 1);
    /**Once the suer click remove, cart data saved in local storage need to be updated and ordertotal need to be updated as well so page reload is necessary */
    localStorage.setItem('cart', JSON.stringify(this.cart));
    location.reload();
  }
  continueShopping(): void {
    this.router.navigate(['']);
  }
}
