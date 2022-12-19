import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { mockdata } from '../mockdata';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent {
  item: any;
  imgs: any = [];
  wishlist: any = [];
  constructor(public router: Router, public fetchApiData: FetchApiDataService) {
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
    const id = item.id.toString();
    console.log(typeof this.wishlist);
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
  }
}
