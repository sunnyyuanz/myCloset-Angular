import { Component } from '@angular/core';
import { ItemViewComponent } from '../item-view/item-view.component';
import { mockdata } from '../mockdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  items: any[] = [];
  gender = window.location.pathname.split('/')[2];
  categories: any[] = [];
  constructor(public router: Router) {
    this.getItems();
    const categories = this.items.map((item) => item.category);
    this.categories = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
  }
  ngOnInit(): void {}

  getItems(): void {
    if (!this.gender) {
      console.log(this.gender);
      this.items = mockdata;
    } else {
      console.log(this.gender);
      this.items = mockdata.filter((item) => item.gender == this.gender);
    }
  }
  getItemDetail(item: any): void {
    this.router.navigate([`items/${item.id}`], { state: item });
  }

  filterItemsByCategory(category: string) {
    this.getItems();
    this.items = this.items.filter((item) => item.category == category);
    console.log(category);
  }
}
