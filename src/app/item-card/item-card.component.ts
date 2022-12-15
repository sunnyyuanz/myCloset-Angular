import { Component } from '@angular/core';
import { mockdata } from '../mockdata';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  items: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.getItems();
  }

  getImgSrc(string: string): any {
    return string.split(' ').join('-').toLowerCase();
  }
  getItems(): void {
    this.items = mockdata;
  }
}
