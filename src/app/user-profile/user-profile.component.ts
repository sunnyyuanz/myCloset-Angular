import { Component, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  userInfo: any = {};
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  //ngOnInit method is called once the component has received all its inputs (all its data-bound properties) from the calling component—in other words, the real-life user.
  ngOnInit(): void {
    this.getUserInfo();
  }

  //This is the function responsible for sending the form inputs to the backend
  getUserInfo(): void {
    this.fetchApiData.userGetInfo().subscribe((resp: any) => {
      this.userInfo = resp;
      console.log(this.userInfo);
      return this.userInfo;
    });
  }
}
