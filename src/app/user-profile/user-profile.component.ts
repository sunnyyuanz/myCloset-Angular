import { Component, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, TitleStrategy } from '@angular/router';
import { mockdata } from '../mockdata';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  userInfo: any = {};
  wishlist: any = [];
  items: any = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {
    this.getUserInfo();
  }

  //ngOnInit method is called once the component has received all its inputs (all its data-bound properties) from the calling component—in other words, the real-life user.
  ngOnInit(): void {
    this.getItems();
  }

  //This is the function responsible for sending the form inputs to the backend
  getUserInfo(): void {
    this.fetchApiData.userGetInfo().subscribe((resp: any) => {
      this.userInfo = resp;
      this.wishlist = this.userInfo.Wishlist;
      console.log(this.userInfo);
      console.log(this.wishlist);
      this.getItems();
      return this.userInfo && this.wishlist;
    });
  }

  getItems(): void {
    console.log('this should be the wishlist');
    if (this.wishlist.length !== 0) {
      this.wishlist.map((id: string) => {
        let item = mockdata.find((i) => i.id.toString() == id);
        this.items.push(item);
      });
    }
    console.log(this.items);
  }

  updateForm(): void {
    this.router.navigate(['update']);
  }
  signOut(): void {
    this.router.navigate(['']).then(() => {
      this.snackBar.open('Signed Out', 'OK', {
        duration: 2000,
      });
      localStorage.clear();
    });
  }

  deRegistered(): void {
    this.router.navigate(['']).then(() => {
      this.snackBar.open('Account has successfully been deleted!', 'OK', {
        duration: 2000,
      });
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    });
    this.fetchApiData.RemoveUser().subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
