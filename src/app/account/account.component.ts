import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  loggedIn = false;
  user = localStorage.getItem('user');
  constructor() {}
  /**
   * loggedIn is the handler for deciding if the user should see profile page or login page
   */
  ngOnInit(): void {
    if (this.user) {
      this.loggedIn = true;
    }
  }
}
