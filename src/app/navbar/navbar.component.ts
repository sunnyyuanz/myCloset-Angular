import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;
  token: any;
  constructor(public router: Router) {}
  //This is the function that will open the dialog when the signup button is clicked
  // openUserRegistrationDialog(): void {
  //   this.dialog.open(UserRegistrationFormComponent, {
  //     //Assigning the dialog a width
  //     width: '280px',
  //   });
  // }
  // openLoginDialog(): void {
  //   this.dialog.open(UserLoginFormComponent, {
  //     //Assigning the dialog a width
  //     width: '280px',
  //   });
  // }
  openAccountPage(): void {
    this.router.navigate(['account']);
  }
  openCart(): void {
    this.router.navigate(['cart']);
  }
}
