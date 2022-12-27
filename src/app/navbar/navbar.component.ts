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
  /**
   * openAccountPage will navigate the user to account page
   */
  openAccountPage(): void {
    this.router.navigate(['account']);
  }
  /**
   * openCart will navigate the user to shopping cart page
   */
  openCart(): void {
    this.router.navigate(['cart']);
  }
}
