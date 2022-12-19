import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss'],
})
export class UserUpdateFormComponent {
  user: any = {};
  @Input() userInfo = { Username: '', Password: '', ConfirmPassword: '' };
  constructor(public router: Router, public fetchApiData: FetchApiDataService) {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.fetchApiData.userGetInfo().subscribe((resp: any) => {
      this.user = resp;
      this.userInfo.Username = this.user.Username;
      this.user.Password = this.user.Password;
      console.log(this.userInfo);
      return this.userInfo;
    });
  }

  updateUser(): void {
    console.log(this.userInfo);
    this.fetchApiData.EditUser(this.userInfo).subscribe((result) => {
      console.log(result);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['account']);
    });
  }
}
