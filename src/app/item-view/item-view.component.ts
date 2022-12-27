import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { mockdata } from '../mockdata';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent {
  item: any;
  imgs: any = [];
  wishlist: any = [];
  mainImg = '';
  color: any;
  cart: any = [];
  login = localStorage.getItem('token') || '';
  @Input() quantity = 1;
  constructor(
    public router: Router,
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar
  ) {
    const id = window.location.pathname.split('/').slice(-1).toString();
    this.item = mockdata.find((item: any) => item.id == id);
  }
  ngOnInit(): void {
    console.log(this.item);
    this.createImgsArray();
    this.getWishlist();
  }

  createImgsArray(): void {
    let imgsrc = '';
    for (let i = 1; i <= this.item.imgs_length; i++) {
      imgsrc =
        this.item.imgs + this.combineImgName(this.item.name) + i + '.jpg';
      console.log(imgsrc);
      this.imgs.push(imgsrc);
    }
    this.mainImg = this.imgs[0];
  }
  combineImgName(string: string): any {
    return string.split(' ').join('-').toLowerCase();
  }

  getWishlist(): void {
    this.fetchApiData.userGetInfo().subscribe((resp: any) => {
      this.wishlist = resp.Wishlist;
    });
  }

  toggleWishlist(item: any): any {
    if (this.login) {
      const id = item.id.toString();
      if (this.wishlist.includes(id)) {
        console.log('need to remove');
        this.fetchApiData.RemoveFromWishList(id).subscribe((resp: any) => {
          this.wishlist = resp.Wishlist;
          console.log(this.wishlist);
        });
      } else {
        console.log('need to add');
        this.fetchApiData.AddToWishList(id).subscribe((resp: any) => {
          this.wishlist = resp.Wishlist;
          console.log(this.wishlist);
        });
      }
    } else {
      this.router.navigate(['account']);
    }
  }

  clickToEnlarge(img: any): any {
    console.log('Enlarge this image' + img);
    this.mainImg = img;
  }

  changeColor(target: any): any {
    this.color = target.value || '';
    if (this.item.imgs_index) {
      this.mainImg =
        this.imgs[
          this.item.imgs_index.findIndex((item: any) => item === this.color)
        ];
    }
    return this.color;
  }

  addToCart(): void {
    if (this.login) {
      if (!this.color) {
        alert('Please pick a color');
      } else {
        const totalPrice = this.item.price * this.quantity;
        const cartItem = {
          id: this.item.id,
          name: this.item.name,
          color: this.color,
          quantity: this.quantity,
          size: this.item.size,
          price: this.item.price,
          img: this.item.imgs + 'cover' + '.jpg',
          totalPrice: totalPrice,
        };
        const currentCart = localStorage.getItem('cart');
        if (currentCart) {
          this.cart = JSON.parse(currentCart);
        }
        this.cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.snackBar.open('Added to cart!', '', {
          duration: 3000,
        });
      }
    } else {
      this.router.navigate(['account']);
    }
  }
}
